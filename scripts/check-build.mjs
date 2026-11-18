import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
const files = [
  "index.html",
  "cas-pratiques.html",
  "gouvernance.html",
  "atelier.html",
  "sources.html",
];
const contents = Object.fromEntries(
  await Promise.all(
    files.map(async (f) => [f, await readFile("dist/" + f, "utf8")]),
  ),
);
let checks = 0;
const fail = (m) => {
  throw new Error(m);
};
for (const [file, html] of Object.entries(contents)) {
  if ((html.match(/<h1\b/g) || []).length !== 1)
    fail(file + " : H1 unique attendu");
  checks++;
  if (
    !html.includes("<main") ||
    !html.includes('name="description"') ||
    !html.includes("application/ld+json")
  )
    fail(file + " : pré-rendu / métadonnées manquantes");
  checks++;
  for (const m of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
    const url = m[1].replaceAll("&amp;", "&");
    if (/^(https?:|mailto:|data:)/.test(url)) continue;
    const [path, hash] = url.split("#");
    const target = path ? path.replace(/^\.\//, "") : file;
    if (!path && !hash) continue;
    try {
      await stat(resolve("dist", target));
    } catch {
      fail(file + " : cible absente " + url);
    }
    checks++;
    if (hash && contents[target] && !contents[target].includes(`id="${hash}"`))
      fail(file + " : ancre absente " + url);
  }
  if (
    /googletagmanager|google-analytics|<iframe|localStorage|document.cookie/.test(
      html,
    )
  )
    fail(file + " : collecte inattendue");
  checks++;
}
const source = JSON.parse(
  await readFile("dist/documents/registre-sources.json", "utf8"),
);
if (source.sources.length !== 12) fail("12 sources attendues");
for (const html of Object.values(contents)) {
  for (const m of html.matchAll(/\[(S\d{2})\]/g))
    if (!source.sources.some((s) => s.id === m[1]))
      fail("Source absente " + m[1]);
}
console.log(
  `Contrôle réussi : 5 pages prérendues, 12 références, ${checks} contrôles de structure et de cibles locales.`,
);
