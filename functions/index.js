/**
 * PostHog reverse proxy for Firebase Hosting (same-origin ingest).
 * Browser SDK: NEXT_PUBLIC_POSTHOG_HOST=https://<your-site>/w
 * Pattern follows https://posthog.com/docs/advanced/proxy/node
 *
 * EU project: change API_HOST / ASSET_HOST below to eu.i.posthog.com / eu-assets.i.posthog.com
 */
const { onRequest } = require("firebase-functions/v2/https");

const PATH_PREFIX = "/w";
const API_HOST = "us.i.posthog.com";
const ASSET_HOST = "us-assets.i.posthog.com";

function readRawBody(req, limit = 6 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on("data", (chunk) => {
      total += chunk.length;
      if (total > limit) {
        reject(new Error("payload too large"));
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

exports.posthogProxy = onRequest(
  {
    region: "asia-southeast1",
    memory: "256MiB",
    invoker: "public",
    cors: true,
    timeoutSeconds: 60,
  },
  async (req, res) => {
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    try {
      const proto = req.headers["x-forwarded-proto"] || "https";
      const host = req.headers.host || "localhost";
      const fullUrl = new URL(req.url, `${proto}://${host}`);
      let pathname = fullUrl.pathname;

      if (!pathname.startsWith(PATH_PREFIX)) {
        res.status(404).type("text/plain").send("Not found");
        return;
      }

      const phPath = pathname.slice(PATH_PREFIX.length) || "/";
      const targetHost = phPath.startsWith("/static/") ? ASSET_HOST : API_HOST;
      const target = new URL(phPath + fullUrl.search, `https://${targetHost}`);

      const headers = new Headers();
      const skip = new Set([
        "host",
        "connection",
        "content-length",
        "cookie",
        "transfer-encoding",
      ]);
      for (const [key, value] of Object.entries(req.headers)) {
        if (value == null || skip.has(key.toLowerCase())) continue;
        if (Array.isArray(value)) {
          value.forEach((v) => headers.append(key, v));
        } else {
          headers.set(key, value);
        }
      }
      headers.set("host", targetHost);

      const xf =
        req.headers["x-forwarded-for"] ||
        req.headers["fastly-client-ip"] ||
        (req.socket && req.socket.remoteAddress);
      if (xf) {
        const v = Array.isArray(xf) ? xf[0] : xf;
        const first = String(v).split(",")[0].trim();
        headers.set("x-forwarded-for", first);
        headers.set("x-real-ip", first);
      }

      const method = req.method || "GET";
      let body;
      if (method !== "GET" && method !== "HEAD") {
        try {
          body = await readRawBody(req);
        } catch (e) {
          res.status(413).type("text/plain").send("Payload too large");
          return;
        }
      }

      const phRes = await fetch(target.toString(), {
        method,
        headers,
        body:
          body && body.length > 0
            ? body
            : method === "GET" || method === "HEAD"
              ? undefined
              : undefined,
        redirect: "manual",
      });

      const hopByHop = new Set([
        "content-encoding",
        "transfer-encoding",
        "connection",
      ]);
      phRes.headers.forEach((value, key) => {
        if (hopByHop.has(key.toLowerCase())) return;
        res.setHeader(key, value);
      });
      res.status(phRes.status);
      const buf = Buffer.from(await phRes.arrayBuffer());
      res.send(buf);
    } catch (err) {
      console.error("posthogProxy error", err);
      res.status(502).type("text/plain").send("Bad gateway");
    }
  },
);
