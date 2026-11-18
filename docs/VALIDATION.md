# Validation du pack

Édition : 18 novembre 2026. Validation locale et aperçu navigateur de la version construite. Aucune publication externe effectuée.

## Contrôles exécutés

| Contrôle | Résultat observé |
| --- | --- |
| TypeScript strict (`npm run typecheck`, intégré au build) | Réussi |
| Build Vite client et serveur de pré-rendu | Réussi |
| Production des cinq pages HTML | Réussie |
| Structure, métadonnées, fichiers et ancres internes | 142 contrôles réussis |
| Tests Node du contenu, de l’attribution et des états initiaux | 5 tests réussis |
| `npm audit` sur les dépendances verrouillées | 0 vulnérabilité signalée au moment de l’exécution |
| Article : parcours de délégation | Changement d’étape et texte associé observés |
| Cas pratiques | Les trois scénarios s’affichent séparément |
| Atelier | Saisie, sélection du scénario et huit cases vérifiées au clavier |
| Atelier complet | État 8/8 puis message de revue humaine, sans autorisation automatique |
| Export de fiche | Événement de téléchargement abouti dans le navigateur |
| Réinitialisation | Retour à 0/8 et message de remise à zéro observés |
| Recherche de sources | NIST : 2 résultats ; recherche sans correspondance : 0 ; effacement : 12 |
| Copie du lien | Adresse de la page retrouvée dans le presse-papiers de test |
| Console de l’application | Aucune erreur applicative observée lors du contrôle final |

## Affichage et accessibilité

Revue visuelle dans Chromium sur ordinateur. Contrôle responsive dans des cadres de navigateur de 390 et 320 pixels de large, sans prétendre à un essai sur des téléphones physiques.

- Article : présentation inspectée à 390 et 320 pixels.
- Gouvernance et cas pratiques : contrôle à 320 pixels.
- Atelier et Sources : contrôle à 390 pixels.
- Absence de débordement horizontal du document dans les vues contrôlées après correction. Le tableau de gouvernance conserve son propre défilement horizontal.
- Menu mobile ouvert et navigation vers l’atelier exécutée.
- Boutons des cas pratiques accessibles dans une disposition verticale sur écran étroit.
- Navigation et activation au clavier utilisées pour la fiche et les boutons.
- Contraste des couleurs principales calculé sur fond blanc : bleu 14,71:1 ; texte secondaire 5,90:1 ; doré 4,86:1.
- Un titre H1 par page, champs étiquetés, lien d’évitement, focus visible, textes alternatifs et états de formulaire annoncés.

Les pages sont prérendues. Leur texte existe dans le HTML sans exécution de JavaScript. Les interactions nécessitent JavaScript. La feuille de style d’impression et le réglage de réduction des animations sont inclus.

## Périmètre et limites

Le contrôle ne constitue pas un audit WCAG exhaustif. Aucun test sur lecteur d’écran physique, Safari, Firefox ou appareil Android/iOS réel n’a été réalisé. Le style d’impression est fourni, sans validation sur toutes les imprimantes. L’aperçu Windows est fourni mais n’a pas été exécuté sous Windows dans cet environnement Linux.

Le contrôle des cibles locales ne remplace pas une surveillance future des liens externes. L’audit npm décrit les avis connus au moment du test, sans prouver l’absence de défaut. Le site n’appelle aucun modèle IA et ne teste pas la sûreté d’agents réels.

Les URL canoniques et le sitemap sont produits seulement lorsque `SITE_URL` est configurée. La version incluse n’impose aucune adresse publique. Leur contenu doit être contrôlé après choix de l’hébergement.
