/** Involve Asia Publisher API (server-only). */

export type PartnerBrand = {
  id: string;
  name: string;
  category: string;
  logoUrl: string | null;
};

type InvolveOfferRow = {
  offer_id?: number;
  offer_name?: string;
  categories?: string;
  logo?: string;
};

type InvolveListResponse<T> = {
  status?: string;
  data?: {
    page?: number;
    nextPage?: number | null;
    data?: T[];
  };
};

const API_BASE = "https://api.involve.asia/api";

/** Shown when credentials are missing or the API fails. */
export const FALLBACK_PARTNER_BRANDS: PartnerBrand[] = [
  { id: "fb-1", name: "Shopee", category: "E-commerce", logoUrl: null },
  { id: "fb-2", name: "Lazada", category: "E-commerce", logoUrl: null },
  { id: "fb-3", name: "Agoda", category: "Travel", logoUrl: null },
  { id: "fb-4", name: "Samsung", category: "Electronics", logoUrl: null },
  { id: "fb-5", name: "Trip.com", category: "Travel", logoUrl: null },
];

function mapOffer(row: InvolveOfferRow): PartnerBrand | null {
  const id = row.offer_id;
  const name = row.offer_name?.trim();
  if (id == null || !name) return null;
  const rawCat = row.categories?.split(",")[0]?.trim();
  return {
    id: String(id),
    name,
    category: rawCat && rawCat.length > 0 ? rawCat : "Partners",
    logoUrl: row.logo?.trim() || null,
  };
}

async function involveFormPost(
  path: string,
  token: string | null,
  fields: Record<string, string | number>,
): Promise<unknown> {
  const body = new URLSearchParams();
  for (const [k, v] of Object.entries(fields)) {
    body.set(k, String(v));
  }
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers,
    body: body.toString(),
  });
  return res.json();
}

async function authenticate(
  key: string,
  secret: string,
): Promise<string | null> {
  const json = (await involveFormPost("/authenticate", null, {
    key,
    secret,
  })) as { status?: string; data?: { token?: string } };
  if (json.status !== "success" || !json.data?.token) return null;
  return json.data.token;
}

async function fetchOffersPage(
  token: string,
  page: number,
): Promise<{ rows: InvolveOfferRow[]; nextPage: number | null }> {
  const json = (await involveFormPost("/offers/all", token, {
    page,
    limit: 100,
    sort_by: "relevance",
    "filters[application_status]": "Approved",
    "filters[offer_status]": "Active",
  })) as InvolveListResponse<InvolveOfferRow>;

  if (json.status !== "success" || !json.data?.data) {
    return { rows: [], nextPage: null };
  }
  const next = json.data.nextPage;
  const nextPage =
    typeof next === "number" && next > page ? next : null;
  return { rows: json.data.data, nextPage };
}

/** Paginated approved/active offers; env caps page and brand counts. */
export async function fetchPartnerBrands(): Promise<PartnerBrand[]> {
  const key = process.env.INVOLVE_ASIA_API_KEY?.trim();
  const secret = process.env.INVOLVE_ASIA_API_SECRET?.trim();
  if (!key || !secret) {
    return FALLBACK_PARTNER_BRANDS;
  }

  const maxPages = Math.min(
    50,
    Math.max(1, Number(process.env.INVOLVE_ASIA_MAX_OFFER_PAGES) || 5),
  );
  const maxBrands = Math.min(
    2000,
    Math.max(10, Number(process.env.INVOLVE_ASIA_MAX_BRANDS_DISPLAY) || 150),
  );

  try {
    const token = await authenticate(key, secret);
    if (!token) return FALLBACK_PARTNER_BRANDS;

    const merged = new Map<string, PartnerBrand>();
    let page = 1;

    for (let i = 0; i < maxPages; i++) {
      const { rows, nextPage } = await fetchOffersPage(token, page);
      if (rows.length === 0) break;
      for (const row of rows) {
        const b = mapOffer(row);
        if (b) merged.set(b.id, b);
      }
      if (!nextPage || merged.size >= maxBrands) break;
      page = nextPage;
    }

    const list = [...merged.values()].slice(0, maxBrands);
    list.sort((a, b) => a.name.localeCompare(b.name, "en"));
    return list.length > 0 ? list : FALLBACK_PARTNER_BRANDS;
  } catch {
    return FALLBACK_PARTNER_BRANDS;
  }
}
