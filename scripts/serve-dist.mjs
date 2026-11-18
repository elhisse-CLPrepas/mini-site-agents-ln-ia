import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
const root = resolve(fileURLToPath(new URL("../dist", import.meta.url)));
const port = Number(process.env.PORT) || 4173;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};
http
  .createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      const p = resolve(
        root,
        "." + (pathname.endsWith("/") ? pathname + "index.html" : pathname),
      );
      if (p !== root && !p.startsWith(root + sep)) {
        res.writeHead(403);
        return res.end("Accès refusé");
      }
      if (!(await stat(p)).isFile()) throw Error();
      const bytes = await readFile(p);
      res.writeHead(200, {
        "Content-Type": types[extname(p)] || "application/octet-stream",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      });
      res.end(bytes);
    } catch {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Page introuvable");
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(
      `Aperçu local : http://127.0.0.1:${port}/ — Ctrl+C pour arrêter`,
    ),
  );
