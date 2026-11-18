import { readFile, writeFile, rm } from "node:fs/promises";
import { render, pages, sources } from "../.ssr/entry-server.js";
const raw = await readFile("dist/index.html", "utf8");
const escape = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
let origin = process.env.SITE_URL?.trim() || "";
if (origin) {
  const u = new URL(origin);
  if (!["http:", "https:"].includes(u.protocol))
    throw new Error("SITE_URL doit être une adresse HTTP(S).");
  origin = u.href.replace(/\/?$/, "/");
}
for (const [key, p] of Object.entries(pages)) {
  const url = origin ? new URL(p.file, origin).href : "";
  const jsonld = {
    "@context": "https://schema.org",
    "@type": key === "article" ? "BlogPosting" : "WebPage",
    inLanguage: "fr",
    headline: p.title,
    description: p.description,
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    author: { "@type": "Person", name: "Abderrahman EL HISSE" },
    publisher: { "@type": "Organization", name: "LN-IA" },
    ...(url
      ? {
          url,
          mainEntityOfPage: url,
          image: new URL("assets/illustration-gouvernance.png", origin).href,
        }
      : {}),
  };
  const meta = `<meta name="description" content="${escape(p.description)}"/><meta property="og:title" content="${escape(p.title)}"/><meta property="og:description" content="${escape(p.description)}"/><meta property="og:type" content="${key === "article" ? "article" : "website"}"/><meta property="og:locale" content="fr_FR"/><meta property="og:site_name" content="LN-IA"/>${url ? `<link rel="canonical" href="${escape(url)}"/><meta property="og:url" content="${escape(url)}"/><meta property="og:image" content="${escape(new URL("assets/illustration-gouvernance.png", origin).href)}"/>` : ""}<meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json">${JSON.stringify(jsonld).replaceAll("<", "\\u003c")}</script>`;
  const html = raw
    .replace(/<title>.*?<\/title>/, `<title>${escape(p.title)} | LN-IA</title>`)
    .replace("<!--meta-->", meta)
    .replace("<!--app-html-->", render(key))
    .replace(
      "</head>",
      "<noscript><style>.site-header nav{display:flex!important}.menu-toggle{display:none!important}</style></noscript></head>",
    );
  await writeFile(`dist/${p.file}`, html);
}
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\n${origin ? "Sitemap: " + new URL("sitemap.xml", origin).href + "\n" : ""}`,
);
if (origin)
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.values(
      pages,
    )
      .map(
        (p) =>
          `<url><loc>${escape(new URL(p.file, origin).href)}</loc><lastmod>2026-11-18</lastmod></url>`,
      )
      .join("")}</urlset>`,
  );
await writeFile(
  "dist/documents/registre-sources.json",
  JSON.stringify({ consultation: "2026-11-18", sources }, null, 2),
);
await rm(".ssr", { recursive: true, force: true });
console.log(
  `5 pages prérendues. ${origin ? "URL canonique et sitemap configurés." : "Sans SITE_URL : aucune URL canonique fictive ni sitemap public généré."}`,
);
