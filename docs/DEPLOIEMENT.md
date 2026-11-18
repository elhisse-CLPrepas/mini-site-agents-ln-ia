# Mettre en ligne le dossier LN-IA

## 1. Préparer l’adresse finale

Choisissez l’adresse complète du dossier, avec son sous-répertoire éventuel. Exemple de structure à remplacer : `https://votre-domaine.tld/blog/agents-ia/`.

Sous PowerShell, depuis la racine du projet :

```powershell
$env:SITE_URL = "https://votre-domaine.tld/blog/agents-ia/"
npm run build
npm run check
npm test
Remove-Item Env:SITE_URL
```

Sous macOS ou Linux :

```bash
SITE_URL="https://votre-domaine.tld/blog/agents-ia/" npm run build
npm run check
npm test
```

Remplacez l’exemple avant publication. `SITE_URL` est une URL publique, pas un secret. Cette variable génère les liens canoniques, les URL de partage et le sitemap. Le code n’envoie aucune donnée à cette adresse pendant le build.

## 2. Hébergement cPanel / Apache

1. Créez le répertoire de destination sous la racine publique du site.
2. Transférez le contenu de `dist/`, en gardant `assets/` et `documents/`.
3. N’envoyez pas `node_modules/`, les scripts de développement ou le projet complet dans le répertoire public.
4. Ouvrez `index.html`, puis les quatre autres pages. Elles n’ont pas besoin de règle de réécriture SPA.
5. Vérifiez HTTPS et les téléchargements.

Le site est statique. Il ne nécessite pas de serveur Node.js en production.

## 3. GitHub Pages

Une méthode simple consiste à publier uniquement les fichiers construits dans une branche dédiée de votre dépôt, puis à sélectionner cette branche et sa racine dans les paramètres Pages. Les chemins relatifs permettent un site à l’adresse `https://compte.github.io/depot/`.

Conservez le projet source sur votre branche de travail. Recalculez `SITE_URL` avec l’adresse réelle du dépôt. Les permissions et paramètres de votre compte déterminent la possibilité de publication. Aucune branche n’a été créée et aucun dépôt n’a été modifié par ce pack.

## 4. Vérification après publication

- Les cinq pages s’ouvrent directement depuis leurs URL.
- Le logo et les deux illustrations apparaissent.
- L’atelier exporte le fichier Markdown attendu.
- Le registre et le conducteur se téléchargent.
- Les sources externes restent accessibles.
- Les liens canoniques correspondent à l’adresse réelle.
- Le sitemap apparaît si `SITE_URL` a été renseignée.

Les journaux techniques de l’hébergeur relèvent de ses propres réglages. Configurez la conservation et l’information des visiteurs selon votre contexte.

## Personnaliser le titre ou le texte

Modifiez `src/data.ts` pour les titres et métadonnées. Modifiez `src/App.tsx` pour le contenu. Les dates éditoriales sont aussi définies dans `scripts/prerender.mjs` : gardez-les cohérentes lors d’une nouvelle édition.

## Publication automatisée de ce dépôt

Adresse : https://elhisse-clprepas.github.io/mini-site-agents-ln-ia/

Le workflow .github/workflows/pages.yml construit et contrôle les sources à chaque push sur main, puis publie exclusivement dist. GitHub Pages utilise la source GitHub Actions. Les droits contents: read suffisent au build ; pages: write et id-token: write sont réservés au déploiement. Aucun secret de chantier ni dépendance node_modules ne fait partie du site publié.

Sous Windows PowerShell, utiliser npm.cmd si npm.ps1 est bloqué par la politique d’exécution ; aucune modification de cette politique n’est nécessaire.