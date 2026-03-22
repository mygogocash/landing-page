"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { Globe } from "@/components/icons";
import { LOCALE_STORAGE_KEY } from "@/lib/locale-storage";

const STORAGE_KEY = LOCALE_STORAGE_KEY;

export const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "th", label: "ไทย", flag: "🇹🇭" },
  { code: "zh-TW", label: "繁體中文", flag: "🇹🇼" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
] as const;

export const REGIONS = [
  { code: "TH", label: "Thailand", flag: "🇹🇭" },
  { code: "TW", label: "Taiwan", flag: "🇹🇼" },
  { code: "JP", label: "Japan", flag: "🇯🇵" },
  { code: "SG", label: "Singapore", flag: "🇸🇬" },
  { code: "MY", label: "Malaysia", flag: "🇲🇾" },
  { code: "ID", label: "Indonesia", flag: "🇮🇩" },
  { code: "PH", label: "Philippines", flag: "🇵🇭" },
  { code: "VN", label: "Vietnam", flag: "🇻🇳" },
  { code: "SEA", label: "Southeast Asia", flag: "🌏" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];
export type RegionCode = (typeof REGIONS)[number]["code"];

type StoredLocale = { lang: LangCode; region: RegionCode };

/** Default locale for first paint (matches server render). */
const DEFAULT_LOCALE: StoredLocale = Object.freeze({
  lang: "en",
  region: "TH",
});

function isLangCode(v: string): v is LangCode {
  return LANGUAGES.some((l) => l.code === v);
}

function isRegionCode(v: string): v is RegionCode {
  return REGIONS.some((r) => r.code === v);
}

function readStored(): StoredLocale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { lang: "en", region: "TH" };
    const parsed = JSON.parse(raw) as Partial<StoredLocale>;
    return {
      lang: parsed.lang && isLangCode(parsed.lang) ? parsed.lang : "en",
      region:
        parsed.region && isRegionCode(parsed.region) ? parsed.region : "TH",
    };
  } catch {
    return { lang: "en", region: "TH" };
  }
}

function persistLocale(lang: LangCode, region: RegionCode) {
  const payload: StoredLocale = { lang, region };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  document.documentElement.lang = lang;
  window.dispatchEvent(
    new CustomEvent<StoredLocale>("gogocash:locale", { detail: payload }),
  );
}

function useLocalePreference() {
  const [locale, setLocale] = useState<StoredLocale>(DEFAULT_LOCALE);

  useEffect(() => {
    const apply = (next: StoredLocale) => {
      setLocale((prev) => {
        if (prev.lang === next.lang && prev.region === next.region) return prev;
        return { lang: next.lang, region: next.region };
      });
      document.documentElement.lang = next.lang;
    };

    apply(readStored());

    const onLocale = (e: Event) => {
      const ce = e as CustomEvent<StoredLocale>;
      apply(ce.detail ?? readStored());
    };
    window.addEventListener("gogocash:locale", onLocale);
    return () => window.removeEventListener("gogocash:locale", onLocale);
  }, []);

  const setRegion = useCallback((r: RegionCode) => {
    const { lang: l } = readStored();
    persistLocale(l, r);
  }, []);

  return {
    lang: locale.lang,
    region: locale.region,
    setRegion,
  };
}

function OptionButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
        selected
          ? "bg-surface-green text-primary"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

export function LocaleDropdown() {
  const router = useRouter();
  const { lang, region, setRegion } = useLocalePreference();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const chooseLanguage = useCallback(
    (code: LangCode) => {
      setOpen(false);
      const keepRegion = readStored().region;
      if (code === "en") {
        persistLocale("en", keepRegion);
        router.push("/");
        return;
      }
      if (code === "th") {
        persistLocale("th", "TH");
        router.push("/th");
        return;
      }
      if (code === "zh-TW") {
        persistLocale("zh-TW", "TW");
        router.push("/tw");
        return;
      }
      persistLocale("ja", "JP");
      router.push("/ja");
    },
    [router],
  );

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <div
      className="relative animate-header-enter motion-reduce:animate-none motion-reduce:opacity-100 [animation-delay:140ms] [animation-fill-mode:both]"
      ref={rootRef}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="group flex min-h-11 min-w-11 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:border-primary/30 hover:bg-surface-green hover:text-primary hover:shadow-md active:scale-[0.97] motion-reduce:transition-colors motion-reduce:hover:scale-100 motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 aria-expanded:border-primary/40 aria-expanded:bg-surface-green aria-expanded:text-primary"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Language and region"
      >
        <Globe
          size={22}
          aria-hidden
          className={`transition-transform duration-300 ease-out motion-reduce:transition-none ${
            open
              ? "scale-110 text-primary"
              : "group-hover:rotate-12 group-hover:scale-105"
          } motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100`}
        />
      </button>
      {open && (
        <div
          className="absolute right-0 top-[calc(100%+0.5rem)] z-[60] w-[min(calc(100vw-2rem),18rem)] origin-top-right animate-locale-panel-in rounded-2xl border border-gray-100 bg-white p-4 shadow-lg motion-reduce:animate-none"
          role="dialog"
          aria-label="Choose language and region"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Language
            </p>
            <div className="mt-2 flex flex-col gap-0.5">
              {LANGUAGES.map((l) => (
                <OptionButton
                  key={l.code}
                  selected={lang === l.code}
                  onClick={() => chooseLanguage(l.code)}
                >
                  <span className="text-lg leading-none" aria-hidden>
                    {l.flag}
                  </span>
                  <span>{l.label}</span>
                </OptionButton>
              ))}
            </div>
          </div>
          <div className="mt-4 border-t border-gray-100 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Region
            </p>
            <div className="mt-2 flex max-h-48 flex-col gap-0.5 overflow-y-auto">
              {REGIONS.map((r) => (
                <OptionButton
                  key={r.code}
                  selected={region === r.code}
                  onClick={() => {
                    setRegion(r.code);
                  }}
                >
                  <span className="text-lg leading-none" aria-hidden>
                    {r.flag}
                  </span>
                  <span>{r.label}</span>
                </OptionButton>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
