import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const html = await readFile("dist/index.html", "utf8");
test("l’article existe sans JavaScript et distingue la portée des chiffres", () => {
  assert.match(html, /25/);
  assert.match(html, /11/);
  assert.match(html, /74 organisations/);
  assert.match(html, /non|pas un sondage mondial/);
  assert.match(html, /id="autonomie"/);
});
test("les pages possèdent des titres et descriptions distincts", async () => {
  const files = ["index", "cas-pratiques", "gouvernance", "atelier", "sources"];
  const docs = await Promise.all(
    files.map((f) => readFile(`dist/${f}.html`, "utf8")),
  );
  assert.equal(
    new Set(docs.map((d) => d.match(/<title>(.*?)<\/title>/)?.[1])).size,
    5,
  );
  assert.equal(
    new Set(
      docs.map((d) => d.match(/name="description" content="([^"]+)"/)?.[1]),
    ).size,
    5,
  );
});
test("la fiche démarre vide et ne délivre pas de conformité", async () => {
  const h = await readFile("dist/atelier.html", "utf8");
  assert.equal((h.match(/type="checkbox"/g) || []).length, 8);
  assert.equal((h.match(/ checked/g) || []).length, 0);
  assert.match(h, /ne calcule pas un score de sécurité/);
  assert.match(h, /Aucune réponse n’est envoyée/);
});
test("les sources distinguent article, rapport, partie impliquée et enquête indépendante", async () => {
  const d = JSON.parse(
    await readFile("dist/documents/registre-sources.json", "utf8"),
  );
  assert.equal(d.sources.length, 12);
  assert.equal(new Set(d.sources.map((x) => x.id)).size, 12);
  assert.equal(
    d.sources.find((x) => x.id === "S11").type,
    "Enquête indépendante",
  );
  assert.match(d.sources.find((x) => x.id === "S02").note, /non représentatif/);
});
test("aucune origine publique fictive n’est imposée au pack", async () => {
  if (!process.env.SITE_URL) {
    assert.doesNotMatch(html, /<link rel="canonical"/);
    assert.doesNotMatch(html, /example\.com/);
  }
});
