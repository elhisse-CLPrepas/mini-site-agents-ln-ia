# Agents IA : l’action appelle la gouvernance

Mini-site éditorial LN-IA · édition du 18 novembre 2026

Adaptation pédagogique du billet OECD.AI du 24 septembre 2026 de Sara Rendtorff-Smith et Yuko Harayama. Enrichissement : Prof. Abderrahman EL HISSE, avec assistance de LUMEN SUPERNOVA. Publication indépendante, sans parrainage de l’OCDE ou du GPAI.

## Ouvrir le site déjà construit

Le dossier `dist/` contient les cinq pages HTML et les ressources prêtes à héberger. Il n’est pas nécessaire de réinstaller les dépendances pour cet aperçu.

1. Décompressez tout le ZIP.
2. Installez Node.js 22.12 ou supérieur. Node.js 24 est recommandé pour reproduire l’environnement utilisé.
3. Sous Windows, lancez `DEMARRER-APERCU.cmd`. Sous macOS ou Linux, lancez `sh DEMARRER-APERCU.sh`.
4. Ouvrez l’adresse affichée : `http://127.0.0.1:4173/`.

Le serveur d’aperçu écoute uniquement sur votre ordinateur. Arrêtez-le avec Ctrl+C. Utilisez cet aperçu HTTP pour tester les interactions, plutôt qu’une ouverture directe en `file://`.

## Modifier dans VS Code

Ouvrez le dossier qui contient `package.json`, puis utilisez son terminal :

```bash
npm ci
npm run dev
```

Ouvrez l’adresse indiquée par Vite. Pour générer et vérifier la version distribuable :

```bash
npm run build
npm run check
npm test
```

`npm ci` utilise les versions du fichier de verrouillage. La première installation nécessite Internet. Le site construit ne dépend d’aucun CDN, compte ou clé d’API.

## Les cinq pages

| Page | Contenu |
| --- | --- |
| `index.html` | Article enrichi, sommaire, parcours de délégation interactif, impression et copie du lien |
| `cas-pratiques.html` | Trois scénarios fictifs : logiciel, administration, recherche |
| `gouvernance.html` | Rôles, droits, preuves, données, recours et cadres institutionnels |
| `atelier.html` | Huit repères déclaratifs, export Markdown, conducteur et affiche LN-IA |
| `sources.html` | Douze références filtrables, méthode, attribution et confidentialité |

## Architecture

- Vite 8.3.8, React 19.3.1, TypeScript 7.0.2 et Bootstrap 5.3.9.
- Cinq véritables pages HTML prérendues lors du build, puis hydratées par React.
- Liens et ressources relatifs pour un domaine ou un sous-répertoire.
- Mise en page responsive, navigation au clavier, lien d’évitement, états annoncés et style d’impression.
- Métadonnées propres à chaque page, données structurées et URL canonique configurable.
- Aucune base de données, télémétrie ou sauvegarde distante du formulaire.

Le texte reste lisible sans JavaScript. Les sélecteurs, filtres et exports demandent JavaScript. L’absence de JavaScript ne transforme pas les exemples affichés en résultats d’essais réels.

## Où intervenir

| Fichier | Rôle |
| --- | --- |
| `src/App.tsx` | Pages, article et interactions |
| `src/data.ts` | Références, scénarios, checklist et métadonnées |
| `src/styles.css` | Identité graphique et responsive |
| `public/assets/` | Logo fourni et illustrations générées avec IA |
| `public/documents/fiche-atelier.md` | Conducteur pédagogique téléchargeable |
| `scripts/prerender.mjs` | Pré-rendu, SEO et registre JSON des sources |
| `scripts/serve-dist.mjs` | Aperçu local sans dépendance npm |

Après toute modification de `src/` ou `public/`, relancez le build. Ne modifiez pas seulement `dist/` : vos changements disparaîtraient au build suivant.

## Publication

Lisez `docs/DEPLOIEMENT.md`. Aucun déploiement n’a été effectué par la préparation de ce pack. `SITE_URL` permet d’ajouter les URL canoniques, l’image de partage absolue et le sitemap lors du build. Sans cette variable, aucune adresse publique fictive n’est insérée.

## Revue éditoriale et éthique

Le détail se trouve dans `docs/AUDIT-EDITORIAL-ETHIQUE.md`. Le chiffre de 25 organisations ne mesure pas l’adoption mondiale. Les exemples LN-IA sont fictifs. La fiche interactive prépare une revue humaine et ne délivre ni score de sécurité, ni certification, ni autorisation. Les obligations juridiques doivent être qualifiées pour le déploiement concerné.

Les droits et crédits figurent dans `DROITS-ET-CREDITS.md`. Les vérifications exécutées sont consignées dans `docs/VALIDATION.md`.
