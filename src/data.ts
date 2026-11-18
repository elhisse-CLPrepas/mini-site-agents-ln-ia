export type Page = "article" | "cas" | "gouvernance" | "atelier" | "sources";
export const pages: Record<
  Page,
  { file: string; label: string; title: string; description: string }
> = {
  article: {
    file: "index.html",
    label: "L’article",
    title: "Agents IA : l’action appelle la gouvernance",
    description:
      "Une lecture pédagogique des entretiens OCDE auprès de 25 organisations dans 11 pays. Déploiement, autonomie encadrée et contrôle humain.",
  },
  cas: {
    file: "cas-pratiques.html",
    label: "Cas pratiques",
    title: "Trois situations pour comprendre les agents IA",
    description:
      "Développement logiciel, administration et recherche : trois scénarios fictifs pour distinguer capacité, autorisation et validation.",
  },
  gouvernance: {
    file: "gouvernance.html",
    label: "Gouvernance",
    title: "Gouverner les agents, protéger les personnes",
    description:
      "Une méthode de contrôle des agents IA, des rôles explicites et des repères datés pour l’éthique, la sécurité et la protection des données.",
  },
  atelier: {
    file: "atelier.html",
    label: "L’atelier",
    title: "Préparez votre fiche de délégation",
    description:
      "Un atelier dans votre navigateur pour cadrer une mission d’agent IA, identifier les preuves manquantes et exporter votre fiche.",
  },
  sources: {
    file: "sources.html",
    label: "Sources",
    title: "Sources, méthode et transparence éditoriale",
    description:
      "Références officielles, dates de consultation, limites de l’enquête et règles d’attribution du dossier LN-IA sur les agents IA.",
  },
};
export const updated = "18 novembre 2026";
export const sources = [
  {
    id: "S01",
    org: "OECD.AI",
    date: "24 septembre 2026",
    title:
      "Putting agentic AI systems to work: What practitioners reveal about deployment and governance",
    url: "https://oecd.ai/en/wonk/putting-agentic-ai-systems-to-work-what-practitioners-reveal-about-deployment-and-governance",
    type: "Article de départ",
    note: "Sara Rendtorff-Smith et Yuko Harayama. Texte fourni par le lecteur et confronté à la page originale. Opinions des autrices, pas nécessairement celles de l’OCDE, du GPAI ou de leurs pays membres.",
  },
  {
    id: "S02",
    org: "OCDE",
    date: "16 septembre 2026",
    title:
      "Agentic AI in organisations: Early insights from practitioner interviews",
    url: "https://doi.org/10.1787/1257a26f-en",
    type: "Document de travail",
    note: "OECD Artificial Intelligence Papers, n° 65, 36 pages. Entretiens qualitatifs. Échantillon volontaire non représentatif. Licence CC BY 4.0 sous conditions.",
  },
  {
    id: "S03",
    org: "OCDE",
    date: "13 février 2026",
    title: "The agentic AI landscape and its conceptual foundations",
    url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/02/the-agentic-ai-landscape-and-its-conceptual-foundations_a9d4b451/396cf758-en.pdf",
    type: "Cadre conceptuel",
    note: "OECD Artificial Intelligence Papers, n° 56. Distingue les caractéristiques des agents et des systèmes agentiques. Ne fixe pas une définition technique unique pour tous les produits.",
  },
  {
    id: "S04",
    org: "OCDE",
    date: "2019, révision 2024",
    title: "Principes de l’OCDE sur l’IA",
    url: "https://www.oecd.org/en/topics/sub-issues/ai-principles.html",
    type: "Principes",
    note: "Droits humains, équité, transparence, robustesse et responsabilité. Cadre de référence à distinguer d’une loi nationale ou d’une certification.",
  },
  {
    id: "S05",
    org: "NIST",
    date: "Cadre 2023, page consultée en 2026",
    title: "AI Risk Management Framework",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    type: "Gestion des risques",
    note: "Cadre volontaire pour organiser la gouvernance, le contexte, la mesure et le traitement des risques. Ce cadre ne certifie pas un agent.",
  },
  {
    id: "S06",
    org: "NIST / NCCoE",
    date: "29 septembre 2026",
    title: "Comments on Software and Agentic AI Identity Concept Paper",
    url: "https://www.nist.gov/news-events/news/2026/09/comments-software-and-agentic-ai-identity-concept-paper",
    type: "Actualisation",
    note: "Bilan de consultation et premier cas d’application dans le développement logiciel sécurisé. Des travaux d’implémentation, pas une norme universelle achevée.",
  },
  {
    id: "S07",
    org: "ISO",
    date: "Édition 2023",
    title: "ISO/IEC 42001 — AI management systems",
    url: "https://www.iso.org/standard/42001",
    type: "Norme de management",
    note: "Présentation publique de la norme consultée. Le texte normatif complet n’a pas été audité. Le management d’un système d’IA se distingue de la sûreté de chaque action.",
  },
  {
    id: "S08",
    org: "Commission européenne",
    date: "27 juillet 2026, mise à jour 31 juillet",
    title: "AI Omnibus enters into force",
    url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force",
    type: "Calendrier européen",
    note: "Communication officielle annonçant les échéances de haut risque des annexes III et I. Qualification à effectuer selon le rôle, l’usage et la juridiction.",
  },
  {
    id: "S09",
    org: "CNDP · Maroc",
    date: "18 mars 2025",
    title: "IA et protection des données à caractère personnel",
    url: "https://www.cndp.ma/wp-content/uploads/2025/03/CNDP-Communique-IA-et-protection-des-donnees-a-caractere-personnel-FR.pdf",
    type: "Données personnelles",
    note: "Rappel de l’application de la loi 09-08 aux traitements d’IA utilisant des données personnelles et de l’importance des voies de recours.",
  },
  {
    id: "S10",
    org: "OpenAI",
    date: "26 août 2026",
    title: "The Hugging Face incident and the road ahead",
    url: "https://openai.com/index/hugging-face-incident-and-the-road-ahead/",
    type: "Retour d’incident",
    note: "Déclaration d’une partie impliquée. Évaluations internes de cybersécurité avec protections réduites. À confronter aux publications de METR et de Hugging Face.",
  },
  {
    id: "S11",
    org: "METR",
    date: "26 août 2026",
    title:
      "Independent investigation of the OpenAI / Hugging Face hacking incident",
    url: "https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/",
    type: "Enquête indépendante",
    note: "Enquête principalement centrée sur le 7 au 13 juillet. La remédiation et la compromission ultérieure de l’infrastructure OpenAI sont hors périmètre. METR déclare ne pas avoir été rémunéré par OpenAI.",
  },
  {
    id: "S12",
    org: "Hugging Face",
    date: "16 juillet 2026",
    title: "Security incident disclosure — July 2026",
    url: "https://huggingface.co/blog/security-incident-july-2026",
    type: "Déclaration de la partie affectée",
    note: "Intrusion signalée et mesures de réponse. L’étendue des effets clients était encore en cours d’analyse au moment de cette publication.",
  },
];
export const checklist = [
  {
    id: "mission",
    label: "Le résultat attendu et les critères d’acceptation sont écrits.",
    hint: "Exemple : proposer un correctif et démontrer que le cas d’erreur est résolu.",
  },
  {
    id: "access",
    label: "Les permissions sont limitées et leur refus a été testé.",
    hint: "Une consigne seule ne retire pas un droit technique.",
  },
  {
    id: "data",
    label:
      "Les données autorisées et leur durée de conservation sont définies.",
    hint: "Utilisez des données fictives pour les premiers essais.",
  },
  {
    id: "review",
    label: "Une personne compétente peut refuser les actions importantes.",
    hint: "Elle doit voir le résultat, sa destination et ses conséquences.",
  },
  {
    id: "trace",
    label: "Les actions et versions peuvent être retrouvées.",
    hint: "Préservez des journaux utiles sans y recopier de secrets.",
  },
  {
    id: "stop",
    label: "L’arrêt, la révocation et la reprise ont été testés.",
    hint: "Vérifiez aussi les opérations distantes et les sous-tâches.",
  },
  {
    id: "rights",
    label: "Les personnes concernées disposent d’un recours.",
    hint: "Prévoyez une explication accessible et une révision humaine.",
  },
  {
    id: "quality",
    label: "La qualité et le coût total ont été comparés à une référence.",
    hint: "Comptez le cadrage, la vérification, les corrections et les échecs.",
  },
];
export const scenarios = [
  {
    id: "code",
    title: "Corriger une application",
    domain: "Développement logiciel",
    icon: "code",
    intro:
      "Une association dispose d’un formulaire qui refuse une date valide. L’agent prépare un correctif dans une copie de travail.",
    task: "Reproduire l’erreur, modifier le code et exécuter les tests autorisés.",
    boundary:
      "Lecture du dépôt et écriture sur une branche d’essai. Aucun accès aux données réelles ni au déploiement.",
    checkpoint:
      "Un responsable examine les changements, les tests et les effets sur les autres fonctions avant toute mise en service.",
    evidence:
      "Un cas échoué avant correction, réussi après correction, et une revue qui confirme que le besoin n’a pas été affaibli.",
    failure:
      "L’agent modifie le test pour masquer le défaut. Le relecteur refuse le changement et rétablit le critère initial.",
    people:
      "Les usagers doivent pouvoir signaler une erreur du formulaire. L’équipe reste responsable de la qualité du service.",
  },
  {
    id: "administration",
    title: "Préparer des réponses",
    domain: "Administration",
    icon: "document",
    intro:
      "Un service reçoit des demandes fictives et souhaite préparer des brouillons classés par thème.",
    task: "Classer les courriers, retrouver des références autorisées et signaler les cas ambigus.",
    boundary:
      "Documents de démonstration uniquement. Aucune décision de droit et aucun envoi au citoyen.",
    checkpoint:
      "Un agent public vérifie les faits, l’applicabilité des textes et le destinataire avant de signer une réponse.",
    evidence:
      "Chaque proposition renvoie à son document source. Les cas incertains restent identifiables dans la file de traitement.",
    failure:
      "Une référence juridique est inventée ou devenue obsolète. La réponse est suspendue et examinée par une personne compétente.",
    people:
      "Une personne concernée doit pouvoir comprendre la réponse et demander une révision. La rapidité ne justifie pas un refus automatique opaque.",
  },
  {
    id: "recherche",
    title: "Explorer une hypothèse",
    domain: "Recherche et formation",
    icon: "search",
    intro:
      "Un atelier compare plusieurs méthodes de calcul sur un jeu de données synthétique dont les résultats de référence sont connus.",
    task: "Proposer du code, lancer les calculs permis, décrire les résultats et relever les limites.",
    boundary:
      "Espace isolé, budget et durée limités. Sources publiques et données synthétiques clairement identifiées.",
    checkpoint:
      "Le chercheur contrôle le protocole, les calculs et l’interprétation avant toute communication scientifique.",
    evidence:
      "Script reproductible, données d’entrée, versions, résultats et échecs conservés.",
    failure:
      "L’agent sélectionne seulement les essais favorables. Le protocole exige de conserver l’ensemble des essais et les critères définis à l’avance.",
    people:
      "Une sortie plausible n’établit ni une découverte ni une preuve. La reconnaissance des contributions et la vérifiabilité restent nécessaires.",
  },
];
