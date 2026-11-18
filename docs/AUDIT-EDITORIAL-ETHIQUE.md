# Revue éditoriale et éthique

Édition examinée : 18 novembre 2026. Cette revue décrit les contrôles du contenu et du mini-site. Elle n’est pas une certification d’un système d’IA déployé.

## Décisions éditoriales

| Point examiné | Traitement dans le mini-site |
| --- | --- |
| 25 organisations, 11 pays | Présentés comme un échantillon d’entretiens qualitatifs. Aucune extrapolation mondiale. |
| 74 organisations contactées | Distinction entre personnes sollicitées et participants volontaires. |
| Productivité | Les bénéfices rapportés ne sont pas présentés comme des mesures indépendantes. |
| Autonomie illimitée | Absence déclarée par les participants, pas affirmation sur tous les systèmes existants. |
| Agent et système agentique | Définition opérationnelle, vocabulaire variable, rôle des outils et permissions explicité. |
| Conscience | Aucune conscience déduite d’une décision autonome ou d’un incident. |
| Mémoire et compétences | La mémoire d’un agent n’est pas assimilée à un nouvel entraînement. |
| Incidents | Contexte de recherche indiqué, déclarations des parties distinguées de l’enquête de METR. |
| Graphique du billet | Non reproduit et aucune série ou statistique globale inventée. |
| Scénarios pratiques | Trois cas explicitement fictifs. Aucun témoignage ni résultat d’entreprise fabriqué. |

## Actualisation documentaire

- S01–S03 : billet d’origine, document de travail et cadre conceptuel OCDE.
- S04 : principes OCDE, révisés en 2024.
- S05 : AI RMF du NIST, cadre volontaire.
- S06 : publication NIST du 29 septembre 2026 sur l’identité des agents et les travaux d’implémentation. Elle ne constitue pas une norme universelle achevée.
- S07 : présentation publique ISO/IEC 42001:2023. Le texte normatif payant n’a pas fait l’objet d’un audit.
- S08 : communication de la Commission européenne sur l’AI Omnibus. Les échéances des annexes III et I sont distinguées des autres obligations. L’application juridique n’est pas déterminée par ce site.
- S09 : communiqué CNDP du 18 mars 2025. Le cadre marocain est traité séparément du cadre européen.
- S10–S12 : OpenAI, METR et Hugging Face. Les périmètres et dates de ces publications ne sont pas confondus.

Les liens et dates sont conservés dans la page Sources et dans `dist/documents/registre-sources.json`. Le statut d’une publication ou d’une règle peut évoluer après la date d’édition.

## Droits et loyauté

- Les autrices du billet sont nommées. Le rapport est attribué à son auteur institutionnel, l’OCDE.
- L’indépendance LN-IA et l’absence de parrainage OCDE/GPAI sont visibles.
- Le rapport CC BY 4.0 est cité avec lien. Les contenus tiers exclus ne sont pas repris.
- Les images de marque LN-IA et les illustrations générées avec IA sont créditées.
- Les sources de fournisseurs sont identifiées. Aucune promotion commerciale ni affiliation n’est intégrée.

## Données et interactions

L’atelier utilise l’état React en mémoire. Il n’ajoute aucun stockage persistant, cookie, compte, analytique ou appel réseau. L’export est un fichier Markdown construit localement avec `Blob`. Les réponses sont effacées au rechargement et par le bouton Réinitialiser.

Le nom de projet et la fonction sont limités en longueur. React échappe leur affichage. Aucun HTML saisi par l’utilisateur n’est interprété. Les valeurs exportées restent du texte Markdown. L’utilisateur doit choisir une fonction ou un intitulé de démonstration et éviter les données confidentielles.

Le chargement du site peut produire des journaux chez l’hébergeur. Les liens externes conduisent à des services tiers, qui appliquent leurs propres règles. Les liens ouverts dans un nouvel onglet utilisent `noopener noreferrer`.

## Contrôle humain

Les huit cases indiquent des déclarations de préparation. Leur total n’est pas un score de sécurité. Même avec huit cases cochées, la page demande l’examen des preuves et une décision humaine consignée. Elle ne certifie ni conformité, ni sûreté, ni autorisation de déployer.

Les scénarios exigent des limites techniques : une consigne de prompt n’est pas présentée comme un contrôle d’accès. Le recours, la diversité des essais, la maîtrise des permissions, l’arrêt et la reprise sont intégrés au contenu.

## Limites de la revue

La vérification des sources n’est pas une expertise juridique de chaque déploiement. L’audit npm dépend des avis de sécurité connus au moment de son exécution. Les contrôles d’accessibilité décrits dans `VALIDATION.md` ne constituent pas une certification WCAG. Le mini-site n’exécute aucun agent IA réel et ne mesure aucune productivité.
