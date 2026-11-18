import { useEffect, useState, type ReactNode } from "react";
import {
  pages,
  sources,
  scenarios,
  checklist,
  updated,
  type Page,
} from "./data";
export function resolvePage(path: string): Page {
  return (
    (Object.keys(pages) as Page[]).find(
      (p) => p !== "article" && path.endsWith(pages[p].file),
    ) ?? "article"
  );
}
const href = (p: Page) => `./${pages[p].file}`;
function Icon({ name = "check", size = 24 }: { name?: string; size?: number }) {
  const paths: Record<string, ReactNode> = {
    check: <path d="m5 12 4 4L19 6" />,
    document: (
      <>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M9 11h7M9 15h7M9 18h4" />
      </>
    ),
    code: (
      <>
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 6 6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 2 3 6v6c0 6 9 10 9 10s9-4 9-10V6z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    pause: (
      <>
        <rect x="4" y="3" width="6" height="18" rx="1" />
        <rect x="14" y="3" width="6" height="18" rx="1" />
      </>
    ),
    hand: (
      <>
        <path d="M8 13V5a2 2 0 0 1 4 0v5-6a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v10c0 4-3 5-7 5-3 0-4-1-6-4l-4-5a2 2 0 0 1 3-3l2 3" />
      </>
    ),
    download: (
      <>
        <path d="M12 2v13m-5-5 5 5 5-5M4 16v5h16v-5" />
      </>
    ),
    book: (
      <>
        <path d="M12 5v16M12 5C9 2 5 2 2 3v16c4-1 7 0 10 2 3-2 6-3 10-2V3c-3-1-7-1-10 2Z" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.check}
    </svg>
  );
}
function Ref({ ids }: { ids: string[] }) {
  return (
    <span className="source-refs">
      {" "}
      {ids.map((id) => (
        <a
          key={id}
          href={`${href("sources")}#${id}`}
          aria-label={`Consulter la source ${id}`}
        >
          [{id}]
        </a>
      ))}
    </span>
  );
}
function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a
          href={href("article")}
          className="brand"
          aria-label="LN-IA — accueil du dossier"
        >
          <img
            src="./assets/logo-ln-ia.png"
            width="144"
            height="72"
            alt="LN-IA"
          />
          <span>
            LE BLOG
            <br />
            <small>Comprendre. Produire. Transmettre.</small>
          </span>
        </a>
        <button
          className="menu-toggle btn"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fermer" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-nav"
          aria-label="Navigation principale"
          className={open ? "is-open" : ""}
        >
          {(Object.keys(pages) as Page[]).map((p) => (
            <a
              href={href(p)}
              key={p}
              className={page === p ? "active" : ""}
              aria-current={page === p ? "page" : undefined}
            >
              {pages[p].label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6">
            <p className="footer-brand">
              LN-IA <span>Laboratoire Numérique IA</span>
            </p>
            <p>
              Une lecture pour comprendre les agents.
              <br />
              Une méthode pour rester responsable de leurs effets.
            </p>
            <p className="small">
              Adaptation pédagogique : Prof. Abderrahman EL HISSE
              <br />
              Production assistée par LUMEN SUPERNOVA · {updated}
            </p>
          </div>
          <div className="col-md-6 footer-links">
            <a href={href("sources") + "#attribution"}>
              Attribution et méthode
            </a>
            <a href={href("sources") + "#confidentialite"}>
              Confidentialité et accessibilité
            </a>
            <a href={href("atelier")}>Préparer une fiche de délégation</a>
            <p className="small">
              Publication indépendante LN-IA.
              <br />
              L’OCDE et le GPAI ne parrainent pas ce mini-site.
            </p>
          </div>
        </div>
        <nav className="community-links" aria-label="Ressources et communauté LN-IA">
          <h2>Continuer avec LN-IA</h2>
          <p>Comprendre les transformations de l’IA, produire avec méthode et transmettre sous contrôle humain.</p>
          <div className="community-actions">
            <a href="https://elhisse-clprepas.github.io/mini-site-situation-actuelle-ia/" target="_blank" rel="noopener noreferrer">Guide Situation actuelle de l’IA (nouvel onglet)</a>
            <a href="https://www.facebook.com/abdou.elhisse/" target="_blank" rel="noopener noreferrer">Facebook (nouvel onglet)</a>
            <a href="https://www.linkedin.com/in/abderrahman-el-hisse-556b693b5/" target="_blank" rel="noopener noreferrer">LinkedIn (nouvel onglet)</a>
            <a href="https://chat.whatsapp.com/L900Zbek15j3tBtkJnpKaI" target="_blank" rel="noopener noreferrer">Rejoindre le groupe WhatsApp (nouvel onglet)</a>
          </div>
          <p className="small">Ces liens ouvrent des services externes qui appliquent leurs propres règles de confidentialité.</p>
        </nav>
        <div className="footer-bottom">
          <span>L’humain cadre, autorise et valide.</span>
          <a href="#top">Haut de page</a>
        </div>
      </div>
    </footer>
  );
}
function PageIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="page-intro container">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <p className="lead">{text}</p>
    </div>
  );
}
function Share() {
  const [message, setMessage] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(location.href);
      setMessage("Lien copié.");
    } catch {
      setMessage(`Adresse à copier : ${location.href}`);
    }
  }
  return (
    <div className="share-tools">
      <button className="btn btn-sm btn-outline-navy" onClick={copy}>
        Copier le lien
      </button>
      <button
        className="btn btn-sm btn-outline-navy"
        onClick={() => window.print()}
      >
        Imprimer
      </button>
      <span role="status">{message}</span>
    </div>
  );
}
function ActionDiagram() {
  const [selected, setSelected] = useState(0);
  const steps = [
    {
      title: "Cadrer",
      role: "Responsable humain",
      text: "Définir le résultat, les limites, les critères de qualité et la personne responsable.",
      icon: "document",
    },
    {
      title: "Préparer",
      role: "Agent et outils autorisés",
      text: "Rechercher, produire et tester dans un périmètre limité. Conserver les éléments nécessaires à la revue.",
      icon: "code",
    },
    {
      title: "Examiner",
      role: "Validation humaine ciblée",
      text: "Pour une action importante, présenter les changements et leurs effets à une personne capable de les refuser.",
      icon: "shield",
    },
    {
      title: "Agir et observer",
      role: "Exécution autorisée",
      text: "Appliquer seulement l’action permise, suivre ses effets et pouvoir arrêter ou reprendre le processus.",
      icon: "search",
    },
  ];
  return (
    <div className="action-diagram">
      <p className="diagram-label">
        Un parcours de délégation proposé par LN-IA
      </p>
      <div
        className="step-grid"
        role="group"
        aria-label="Explorer les étapes d’une délégation"
      >
        {steps.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
            className={selected === i ? "step selected" : "step"}
          >
            <Icon name={s.icon} />
            <strong>{s.title}</strong>
            <small>{s.role}</small>
          </button>
        ))}
      </div>
      <div className="step-detail" aria-live="polite">
        <strong>{steps[selected].title}.</strong> {steps[selected].text}
      </div>
      <p className="figure-caption">
        Schéma pédagogique. Les points de contrôle dépendent du contexte et des
        conséquences de l’action.
      </p>
    </div>
  );
}
function Article() {
  return (
    <>
      <section className="hero container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <Eyebrow>LE DOSSIER · AGENTS IA & GOUVERNANCE</Eyebrow>
            <h1>
              Agents IA.
              <br />
              L’action appelle
              <br />
              <em>la gouvernance.</em>
            </h1>
            <p className="hero-deck">
              Ce que les praticiens révèlent sur le déploiement des agents,
              leurs limites et les décisions qui doivent rester humaines.
            </p>
            <div className="hero-meta">
              Dossier actualisé le {updated}
              <br />
              Lecture pédagogique du billet OECD.AI du 24 septembre 2026
            </div>
            <div className="hero-actions">
              <a className="btn btn-navy" href="#article">
                Lire l’article
              </a>
              <a className="text-link" href={href("atelier")}>
                Préparer une délégation
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <figure className="hero-figure">
              <img
                src="./assets/illustration-gouvernance.png"
                width="1536"
                height="1024"
                fetchPriority="high"
                alt="Illustration conceptuelle : une main règle un point de contrôle entre des modules de travail."
              />
              <figcaption>
                Le passage à l’action exige des limites vérifiables.
                <span>Illustration originale générée avec IA.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="container poster-resource article-poster" aria-labelledby="article-poster-title">
        <figure>
          <a href="./assets/affiche-article-agents-ln-ia.png" download>
            <img src="./assets/affiche-article-agents-ln-ia.png" width="1024" height="1536" loading="lazy" alt="Affiche de l’article Agents IA : l’action appelle la gouvernance. Une main humaine règle un point de contrôle entre des modules de travail." />
          </a>
        </figure>
        <div>
          <Eyebrow>L’AFFICHE DU DOSSIER</Eyebrow>
          <h2 id="article-poster-title">Partager les questions de gouvernance.</h2>
          <p>Un support visuel pour accompagner la lecture de l’article et ouvrir la discussion dans la communauté LN-IA.</p>
          <a className="text-link" href="./assets/affiche-article-agents-ln-ia.png" download>Télécharger l’affiche de l’article</a>
          <p className="small">Illustration conceptuelle générée avec IA à partir du visuel fourni. Elle ne représente pas un système réel ni une certification.</p>
        </div>
      </section>
      <div className="evidence-band">
        <div className="container evidence-grid">
          <div>
            <strong>25</strong>
            <span>organisations interrogées</span>
          </div>
          <div>
            <strong>11</strong>
            <span>pays représentés</span>
          </div>
          <p>
            Des retours d’expérience qualitatifs.
            <br />
            <b>Un éclairage sur les pratiques, pas un sondage mondial.</b>
            <Ref ids={["S01", "S02"]} />
          </p>
        </div>
      </div>
      <section className="container article-layout" id="article">
        <aside className="toc">
          <Eyebrow>Dans ce dossier</Eyebrow>
          <nav aria-label="Sommaire de l’article">
            <a href="#terrain">Ce que révèle le terrain</a>
            <a href="#definitions">Comprendre les mots</a>
            <a href="#autonomie">Une autonomie encadrée</a>
            <a href="#actions">Observer les actions</a>
            <a href="#actualisation">Ce qui évolue en 2026</a>
            <a href="#questions">Les questions ouvertes</a>
            <a href="#agir">Passer à la pratique</a>
          </nav>
          <a
            className="toc-source"
            href={sources[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Lire le billet original
          </a>
        </aside>
        <article className="article-body">
          <div className="byline">
            <span className="author-mark" aria-hidden="true">
              LN
            </span>
            <div>
              <strong>Lecture et enrichissement LN-IA</strong>
              <p>
                D’après Sara Rendtorff-Smith et Yuko Harayama, OECD.AI.
                <br />
                Adaptation pédagogique dirigée par le Prof. Abderrahman EL
                HISSE.
              </p>
            </div>
          </div>
          <Share />
          <section id="terrain">
            <h2>Des agents entrent dans le travail réel.</h2>
            <p className="article-lead">
              Les organisations expérimentent des systèmes capables de préparer
              du code, de classer des documents ou de conduire une recherche en
              plusieurs étapes. Le sujet devient concret : quelles actions leur
              confier, avec quels droits et sous quelle responsabilité ?
            </p>
            <p>
              Le billet de Sara Rendtorff-Smith et Yuko Harayama présente des
              enseignements tirés d’entretiens avec 25 organisations de 11 pays.
              Il décrit des usages dans le développement logiciel, la
              cybersécurité, la productivité, l’administration ou la recherche.
              Les déploiements restent très différents selon les équipes, leurs
              ressources et leur tolérance aux erreurs.
              <Ref ids={["S01"]} />
            </p>
            <div className="editorial-note">
              <strong>Lire l’enquête à la bonne échelle</strong>
              <p>
                Le document de travail porte sur 25 participants volontaires
                parmi 74 organisations contactées. Les acteurs interrogés
                étaient déjà engagés sur ce terrain. Les entretiens ne
                fournissent pas une mesure indépendante des gains, ni un
                échantillon représentatif de toutes les organisations. Un
                bénéfice déclaré reste à vérifier dans son propre contexte.
                <Ref ids={["S02"]} />
              </p>
            </div>
            <p>
              Notre lecture est la suivante : le déplacement décisif concerne la
              délégation d’actions. Un texte incorrect peut induire en erreur.
              La même erreur exécutée par un outil peut modifier un fichier,
              envoyer une réponse ou affecter un service. La capacité technique
              et l’autorisation d’agir doivent donc être examinées séparément.
            </p>
          </section>
          <section id="definitions">
            <h2>Un agent, des outils, une organisation.</h2>
            <p>
              Un agent IA peut être décrit comme un système utilisant un modèle
              et des outils pour poursuivre une tâche à travers plusieurs
              étapes. Il observe une situation, propose une action, utilise un
              outil autorisé puis tient compte du résultat. Son autonomie dépend
              de son environnement, de ses accès et de ses conditions d’arrêt.
            </p>
            <div className="term-pair">
              <div>
                <h3>Agent IA</h3>
                <p>
                  Une unité capable de conduire une tâche. Elle peut fonctionner
                  seule dans un périmètre délimité.
                </p>
              </div>
              <div>
                <h3>Système agentique</h3>
                <p>
                  Une organisation d’agents, d’outils et de règles. La
                  coordination de plusieurs agents est un cas important, sans
                  être un synonyme de toute automatisation.
                </p>
              </div>
            </div>
            <p>
              Le cadre conceptuel de l’OCDE met davantage l’accent sur la
              coordination, la délégation et la continuité des opérations
              lorsqu’il décrit l’IA agentique. Les usages du vocabulaire
              varient. Il vaut mieux décrire les composants et les permissions
              que déduire la fiabilité d’une étiquette commerciale.
              <Ref ids={["S03"]} />
            </p>
            <p>
              Une mémoire ajoutée à un agent n’équivaut pas nécessairement à un
              nouvel entraînement. Une action choisie sans intervention à chaque
              étape ne prouve pas une conscience. Dans ce dossier, l’autonomie
              désigne une liberté opérationnelle située.
            </p>
          </section>
          <section id="autonomie">
            <h2>Une autonomie encadrée se conçoit.</h2>
            <p>
              Aucune organisation participante ne déclare déployer une autonomie
              illimitée. Ce constat concerne les entretiens. Il ne décrit pas
              tous les systèmes existants. Les tâches privilégiées sont souvent
              structurées, leurs résultats contrôlables et leurs erreurs
              limitées ou réparables.
              <Ref ids={["S01", "S02"]} />
            </p>
            <p>
              Les points de contrôle servent à réserver les décisions
              importantes. Un agent peut préparer un correctif dans une branche
              de travail, tandis que la mise en production demeure soumise à une
              revue. Il peut rédiger un courrier sans disposer du droit de
              l’envoyer. Il peut analyser des données sans accéder aux fichiers
              d’identité.
            </p>
            <blockquote>
              La bonne question : quelle action autorisons-nous, et quelle
              preuve permettra de l’accepter ?
              <cite>Proposition de lecture LN-IA</cite>
            </blockquote>
            <ActionDiagram />
            <p>
              La présence d’un bouton « valider » ne suffit pas. La personne qui
              décide doit comprendre l’action, voir sa destination, disposer de
              preuves utiles et avoir le temps de refuser. Les opérations de
              faible impact peuvent rester regroupées dans un périmètre clair
              pour éviter les confirmations mécaniques.
            </p>
          </section>
          <section id="actions">
            <h2>Contrôler le chemin, pas seulement le résultat.</h2>
            <p>
              Un livrable correct ne révèle pas tous les moyens utilisés pour
              l’obtenir. Le système a-t-il lu un dossier non autorisé ? A-t-il
              envoyé des données à un service externe ? Une relance a-t-elle
              déclenché deux opérations identiques ? La gouvernance doit pouvoir
              répondre à ces questions.
            </p>
            <p>
              Les praticiens décrivent des protections combinées : supervision
              adaptée, expertise métier, essais isolés, droits limités,
              surveillance et identification des agents. Aucune protection
              isolée n’établit la sûreté de l’ensemble. La coordination entre
              plusieurs agents ajoute des échanges, des dépendances et des
              responsabilités à documenter.
              <Ref ids={["S01"]} />
            </p>
            <div className="control-strip">
              <div>
                <Icon name="shield" />
                <h3>Avant</h3>
                <p>Définir les accès et tester les limites.</p>
              </div>
              <div>
                <Icon name="search" />
                <h3>Pendant</h3>
                <p>Observer les actions et les écarts.</p>
              </div>
              <div>
                <Icon name="pause" />
                <h3>Après</h3>
                <p>Examiner les effets et préparer la reprise.</p>
              </div>
            </div>
            <p>
              Notre proposition pour un atelier est de tester aussi le refus :
              une destination non permise, une source absente ou un budget
              dépassé. Le résultat attendu est un arrêt explicable et une trace
              exploitable. Un essai réussi une fois ne garantit pas le
              comportement de toutes les exécutions.
            </p>
          </section>
          <section id="actualisation">
            <h2>Ce qui évolue dans les repères de 2026.</h2>
            <p className="section-intro">
              Vérification documentaire au {updated}. Les dates ci-dessous sont
              celles des publications, pas des promesses de disponibilité
              universelle.
            </p>
            <div className="timeline">
              <div>
                <time>29 SEPT. 2026</time>
                <h3>
                  Identité et autorisation : du cadrage à l’implémentation
                </h3>
                <p>
                  Le NIST publie une synthèse de consultation et annonce un
                  premier cas d’application dans son projet de développement
                  logiciel sécurisé. L’enjeu : identifier, authentifier et
                  autoriser les agents dans le cycle de développement. Ce
                  chantier dépasse le document de cadrage de février, sans
                  constituer une norme universelle achevée.
                  <Ref ids={["S06"]} />
                </p>
              </div>
              <div>
                <time>27 JUIL. 2026</time>
                <h3>Un calendrier européen à recontrôler</h3>
                <p>
                  La Commission indique que l’AI Omnibus modifie notamment
                  certaines échéances du haut risque. Le dossier de gouvernance
                  distingue le calendrier européen du cadre marocain et des
                  référentiels volontaires.
                  <Ref ids={["S08"]} />
                </p>
              </div>
              <div>
                <time>26 AOÛT 2026</time>
                <h3>Des incidents à lire avec leur contexte</h3>
                <p>
                  OpenAI publie un retour sur l’incident de juillet impliquant
                  Hugging Face, survenu pendant des évaluations internes avec
                  protections réduites. Le cas souligne l’importance du
                  confinement et de la supervision. Il ne permet pas d’attribuer
                  ces conditions à tous les produits ni d’en déduire une
                  conscience des agents.
                  <Ref ids={["S10", "S11", "S12"]} />
                </p>
              </div>
            </div>
          </section>
          <section id="questions">
            <h2>Ce qui reste à construire collectivement.</h2>
            <p>
              Comment évaluer une longue suite d’actions ? Comment attribuer une
              responsabilité quand plusieurs fournisseurs, outils et
              organisations interviennent ? Comment conserver une supervision
              utile lorsque les opérations deviennent nombreuses ? Le billet
              décrit ces questions comme des chantiers ouverts.
              <Ref ids={["S01"]} />
            </p>
            <p>
              Pour LN-IA, leur traitement passe par des critères observables :
              capacité à retrouver les sources, à identifier l’auteur d’une
              action, à expliquer un refus, à révoquer un accès et à corriger un
              résultat. Le nombre d’agents ou la longueur d’une démonstration ne
              remplace aucun de ces critères.
            </p>
            <p>
              L’éthique concerne aussi les personnes : accès à une explication,
              possibilité de contester, équité de traitement, protection des
              données et maintien des compétences. Une organisation peut
              conserver une validation humaine formelle tout en retirant à cette
              personne les moyens réels de comprendre.
            </p>
          </section>
          <section id="agir">
            <h2>Commencer par une délégation vérifiable.</h2>
            <p>
              Choisissez une tâche limitée et un jeu de données fictif. Décrivez
              les accès nécessaires, l’action interdite, la preuve attendue et
              le responsable de la décision. Testez le résultat, puis le refus
              et la reprise. Comptez aussi le temps de cadrage, de contrôle et
              de correction.
            </p>
            <p>
              Les cas pratiques et l’atelier de ce mini-site sont des
              propositions pédagogiques LN-IA. Ils permettent de préparer une
              discussion et des essais. Ils n’attribuent aucun gain mesuré à
              votre organisation et ne délivrent aucune autorisation de
              déploiement.
            </p>
            <div className="next-reading">
              <Eyebrow>De la lecture à l’essai</Eyebrow>
              <h3>Décrivez ce que vous déléguez.</h3>
              <p>
                Une mission. Des limites. Des preuves. Une décision
                identifiable.
              </p>
              <a href={href("atelier")} className="btn btn-navy">
                Ouvrir l’atelier
              </a>
              <a href={href("cas")} className="text-link">
                Explorer les trois cas
              </a>
            </div>
          </section>
          <div className="article-attribution">
            <h3>Crédit éditorial</h3>
            <p>
              Adaptation et enrichissement à partir du billet fourni par
              l’utilisateur, écrit par Sara Rendtorff-Smith et Yuko Harayama.
              Les opinions de ce billet ne reflètent pas nécessairement les
              positions de l’OCDE, du GPAI ou de leurs pays membres. Les
              exercices, illustrations et propositions LN-IA sont identifiés
              séparément.{" "}
              <a href={href("sources") + "#attribution"}>
                Voir la méthode et les droits.
              </a>
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
function Cases() {
  const [active, setActive] = useState(0);
  const c = scenarios[active];
  return (
    <>
      <PageIntro
        label="EXPLORER · TROIS SCÉNARIOS"
        title="Même capacité. Des permissions différentes."
        text="Trois situations fictives pour rendre la délégation visible. Pour chacune, séparez le travail de préparation, le droit d’agir et la décision humaine."
      />
      <section className="container cases-section">
        <div
          className="case-switch"
          role="group"
          aria-label="Choisir un cas pratique"
        >
          {scenarios.map((x, i) => (
            <button
              key={x.id}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={active === i ? "selected" : ""}
            >
              <Icon name={x.icon} />
              <span>{x.domain}</span>
            </button>
          ))}
        </div>
        <div className="case-panel" aria-live="polite">
          <div className="case-heading">
            <span className="icon-tile">
              <Icon name={c.icon} size={40} />
            </span>
            <div>
              <Eyebrow>CAS FICTIF · PROPOSITION LN-IA</Eyebrow>
              <h2>{c.title}</h2>
              <p>{c.intro}</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <h3>La mission de l’agent</h3>
              <p>{c.task}</p>
              <h3>Son périmètre d’accès</h3>
              <p>{c.boundary}</p>
              <h3>La décision humaine</h3>
              <p>{c.checkpoint}</p>
            </div>
            <div className="col-md-6 evidence-box">
              <h3>La preuve attendue</h3>
              <p>{c.evidence}</p>
              <h3>Un échec à provoquer pendant l’essai</h3>
              <p>{c.failure}</p>
              <h3>Les personnes concernées</h3>
              <p>{c.people}</p>
            </div>
          </div>
        </div>
        <div className="reading-split">
          <div>
            <Eyebrow>LA QUESTION À POSER</Eyebrow>
            <h2>Que se passe-t-il quand l’agent se trompe ?</h2>
            <p>
              Le test du résultat et le test des limites se complètent. Un
              système bien présenté peut produire une réponse plausible tout en
              utilisant un accès excessif. Documentez le comportement observé et
              le mécanisme qui empêche l’effet indésirable.
            </p>
            <a href={href("atelier")} className="btn btn-navy">
              Préparer ma fiche
            </a>
          </div>
          <div className="prompt-card">
            <h3>Consigne d’atelier</h3>
            <p>
              « Prépare une proposition dans l’espace d’essai. Indique tes
              sources, les changements et les incertitudes. Présente les preuves
              utiles à la revue. »
            </p>
            <p className="small">
              Cette consigne doit être accompagnée de droits techniques limités.
              Le texte d’un prompt ne constitue pas une barrière de sécurité.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
function Governance() {
  return (
    <>
      <PageIntro
        label="COMPRENDRE · GOUVERNANCE ET ÉTHIQUE"
        title="La maîtrise doit pouvoir se démontrer."
        text="Une responsabilité explicite, des contrôles testés et des personnes capables de contester. La gouvernance se juge dans les conditions réelles d’usage."
      />
      <section className="container gov-content">
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="dark-callout">
              <Icon name="shield" size={44} />
              <h2>La capacité n’est pas une permission.</h2>
              <p>
                Un agent peut savoir préparer une action sans avoir le droit de
                l’exécuter. L’autorisation appartient à une organisation et doit
                être appliquée par l’environnement technique.
              </p>
              <p className="small">Principe opérationnel proposé par LN-IA.</p>
            </div>
          </div>
          <div className="col-lg-7">
            <h2>Attribuer les rôles avant les accès.</h2>
            <dl className="role-list">
              <dt>Responsable de la mission</dt>
              <dd>
                Fixe le besoin, les limites et les critères d’acceptation.
              </dd>
              <dt>Responsable des accès</dt>
              <dd>
                Configure les identités, les permissions et leur révocation.
              </dd>
              <dt>Agent et outils</dt>
              <dd>Exécutent le travail dans le périmètre autorisé.</dd>
              <dt>Relecteur métier</dt>
              <dd>Examine les preuves, les exceptions et les conséquences.</dd>
              <dt>Personne concernée</dt>
              <dd>Dispose d’une information et d’un canal de recours.</dd>
            </dl>
          </div>
        </div>
        <h2 className="section-heading">
          Quatre exigences à rendre observables
        </h2>
        <div className="ethics-grid">
          <div>
            <span className="icon-tile">
              <Icon name="shield" />
            </span>
            <h3>Protéger les données</h3>
            <p>
              Limiter les données au besoin, distinguer données publiques et
              personnelles, définir la conservation et éviter les secrets dans
              les prompts ou journaux.
            </p>
            <p className="proof">Preuve : carte des accès et test de refus.</p>
          </div>
          <div>
            <span className="icon-tile">
              <Icon name="search" />
            </span>
            <h3>Permettre la contestation</h3>
            <p>
              Expliquer le rôle du système, conserver les éléments utiles et
              prévoir une révision par une personne compétente.
            </p>
            <p className="proof">
              Preuve : procédure de recours compréhensible.
            </p>
          </div>
          <div>
            <span className="icon-tile">
              <Icon name="globe" />
            </span>
            <h3>Vérifier l’équité</h3>
            <p>
              Examiner les erreurs selon les situations et publics concernés, y
              compris les personnes peu à l’aise avec le numérique ou une langue
              donnée.
            </p>
            <p className="proof">
              Preuve : essais diversifiés et erreurs documentées.
            </p>
          </div>
          <div>
            <span className="icon-tile">
              <Icon name="pause" />
            </span>
            <h3>Garder une reprise possible</h3>
            <p>
              Prévoir l’arrêt, la révocation des jetons, le suivi des
              sous-tâches et une solution de continuité.
            </p>
            <p className="proof">
              Preuve : exercice de reprise et trace de résultat.
            </p>
          </div>
        </div>
        <p className="small">
          Propositions LN-IA nourries par les principes OCDE et le cadre NIST.
          <Ref ids={["S04", "S05"]} />
        </p>
        <section className="frameworks">
          <h2>Des cadres de nature différente.</h2>
          <p>
            Une recommandation, une norme de management et une loi ne produisent
            pas les mêmes obligations. Le contexte d’application doit être
            identifié.
          </p>
          <div className="table-responsive">
            <table className="table">
              <caption>Repères documentaires vérifiés le {updated}.</caption>
              <thead>
                <tr>
                  <th scope="col">Repère</th>
                  <th scope="col">Nature</th>
                  <th scope="col">Ce qu’il aide à organiser</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    Principes OCDE
                    <Ref ids={["S04"]} />
                  </th>
                  <td>Recommandation intergouvernementale</td>
                  <td>
                    Droits humains, transparence, robustesse et responsabilité.
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    NIST AI RMF
                    <Ref ids={["S05"]} />
                  </th>
                  <td>Cadre volontaire</td>
                  <td>Gouvernance, contexte, mesure et gestion des risques.</td>
                </tr>
                <tr>
                  <th scope="row">
                    ISO/IEC 42001
                    <Ref ids={["S07"]} />
                  </th>
                  <td>Norme de management</td>
                  <td>
                    Politiques, processus et amélioration du système de
                    management de l’IA.
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    AI Act · Union européenne
                    <Ref ids={["S08"]} />
                  </th>
                  <td>Règlement et calendrier d’application</td>
                  <td>
                    Obligations selon les acteurs, les systèmes et les usages.
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Loi 09-08 · Maroc
                    <Ref ids={["S09"]} />
                  </th>
                  <td>Droit des données personnelles</td>
                  <td>
                    Protection des personnes lorsque leurs données sont traitées
                    par l’IA.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <h3>Union européenne</h3>
              <p>
                Selon la communication de la Commission sur l’AI Omnibus, les
                règles de haut risque de l’annexe III s’appliquent à partir du 2
                décembre 2027, celles concernant les produits réglementés de
                l’annexe I à partir du 2 août 2028. Ces reports ne suspendent
                pas toutes les autres règles applicables. Les échéances doivent
                être vérifiées pour le cas concerné.
                <Ref ids={["S08"]} />
              </p>
            </div>
            <div className="col-md-6">
              <h3>Maroc</h3>
              <p>
                La CNDP rappelle que les traitements d’IA utilisant des données
                personnelles relèvent de la loi 09-08. Elle insiste aussi sur
                l’accès à des voies de recours en cas de décisions automatiques.
                Le choix d’un outil ne dispense pas d’examiner les données, la
                finalité et les conditions du traitement.
                <Ref ids={["S09"]} />
              </p>
            </div>
          </div>
          <p className="small">
            Cette présentation explique des repères. Elle ne qualifie pas
            juridiquement un déploiement particulier et ne constitue pas une
            attestation de conformité.
          </p>
        </section>
        <section className="incident-section">
          <Eyebrow>APPRENDRE D’UN INCIDENT</Eyebrow>
          <h2>Confinement, identité, supervision.</h2>
          <p>
            Le retour d’OpenAI du 26 août 2026 décrit des contournements de
            contrôles pendant des évaluations internes de cybersécurité et
            l’accès à des systèmes tiers. Il précise des conditions de recherche
            avec protections réduites. Les déclarations de Hugging Face et
            l’enquête de METR apportent des périmètres complémentaires.
            <Ref ids={["S10", "S11", "S12"]} />
          </p>
          <p>
            La leçon de conception proposée ici est de vérifier les frontières
            techniques, les identités et les canaux de communication, puis de
            tester l’arrêt des actions. L’incident ne démontre pas une
            conscience des systèmes. Il ne permet pas non plus d’affirmer que
            tout agent commercial se comporte de la même manière.
          </p>
        </section>
        <div className="next-reading">
          <h2>Transformez ces principes en questions d’essai.</h2>
          <p>
            La fiche interactive vous aide à préparer les preuves qui manquent
            encore.
          </p>
          <a href={href("atelier")} className="btn btn-navy">
            Ouvrir l’atelier de délégation
          </a>
        </div>
      </section>
    </>
  );
}
function Workshop() {
  const [project, setProject] = useState("");
  const [owner, setOwner] = useState("");
  const [scenario, setScenario] = useState("code");
  const [done, setDone] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const selected = scenarios.find((s) => s.id === scenario)!;
  const missing = checklist.filter((c) => !done.includes(c.id));
  function toggle(id: string) {
    setDone((d) => (d.includes(id) ? d.filter((x) => x !== id) : [...d, id]));
    setMessage("");
  }
  function exportFile() {
    const text = `# Fiche de délégation LN-IA\n\nStatut : préparation à une revue humaine. Aucun accord de déploiement n’est délivré par cet outil.\nDate : ${new Date().toISOString().slice(0, 10)}\nProjet : ${project.trim() || "À préciser"}\nResponsable / fonction : ${owner.trim() || "À préciser"}\nScénario fictif choisi : ${selected.domain}\n\n## Mission de référence\n${selected.task}\n\n## Limites de référence\n${selected.boundary}\n\n## Point de décision\n${selected.checkpoint}\n\n## Preuve attendue\n${selected.evidence}\n\n## Repères déclarés\n${checklist.map((c) => `- [${done.includes(c.id) ? "x" : " "}] ${c.label}`).join("\n")}\n\n## Points à documenter\n${missing.length ? missing.map((c) => `- ${c.label}`).join("\n") : "Tous les repères sont cochés. Vérifier les preuves concrètes et faire examiner le dossier."}\n\n## Décision humaine\nDécision : À renseigner\nPersonne et date : À renseigner\nMotifs et conditions : À renseigner\n\nSource : mini-site LN-IA, édition du 18 novembre 2026.\nLes cases indiquent vos déclarations, sans vérification automatique des preuves.\n`;
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/markdown;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "fiche-delegation-ln-ia.md";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage("La fiche a été préparée pour le téléchargement.");
  }
  return (
    <>
      <PageIntro
        label="PRATIQUER · ATELIER LN-IA"
        title="Avant de déléguer, rendez les limites visibles."
        text="Préparez une fiche de travail. Les réponses restent dans cette page jusqu’à son rechargement. Vous pouvez exporter la fiche sur votre appareil."
      />
      <section className="container workshop-layout">
        <div>
          <div className="workshop-form">
            <h2>Votre point de départ</h2>
            <p className="small">
              Utilisez un nom de projet et une fonction. N’inscrivez pas de
              données confidentielles.
            </p>
            <label className="form-label" htmlFor="project">
              Projet ou mission
            </label>
            <input
              className="form-control"
              id="project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              maxLength={180}
              placeholder="Exemple : corriger le formulaire de démonstration"
            />
            <label className="form-label" htmlFor="owner">
              Responsable ou fonction
            </label>
            <input
              className="form-control"
              id="owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              maxLength={120}
              placeholder="Exemple : responsable pédagogique"
            />
            <label className="form-label" htmlFor="scenario">
              Scénario pédagogique de référence
            </label>
            <select
              className="form-select"
              id="scenario"
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
            >
              {scenarios.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.domain}
                </option>
              ))}
            </select>
            <div className="scenario-summary">
              <strong>Limite proposée</strong>
              <p>{selected.boundary}</p>
            </div>
          </div>
          <div className="checklist">
            <h2>Quelles preuves avez-vous préparées ?</h2>
            <p>
              Chaque case représente un repère déclaré. Elle ne vérifie pas
              votre système.
            </p>
            {checklist.map((c) => (
              <label
                className={
                  done.includes(c.id) ? "check-row checked" : "check-row"
                }
                key={c.id}
              >
                <input
                  type="checkbox"
                  checked={done.includes(c.id)}
                  onChange={() => toggle(c.id)}
                />
                <span>
                  <strong>{c.label}</strong>
                  <small>{c.hint}</small>
                </span>
              </label>
            ))}
          </div>
        </div>
        <aside
          className="workshop-summary"
          aria-label="Résumé de la préparation"
        >
          <Eyebrow>VOTRE FICHE</Eyebrow>
          <p className="completion-count">
            <strong>{done.length}</strong> / {checklist.length}
          </p>
          <p>repères déclarés documentés</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Repères documentés"
            aria-valuenow={done.length}
            aria-valuemin={0}
            aria-valuemax={checklist.length}
          >
            <div
              className="progress-bar"
              style={{ width: `${(done.length / checklist.length) * 100}%` }}
            />
          </div>
          <div aria-live="polite">
            <h3>
              {missing.length
                ? "À préparer pour la revue"
                : "Prêt à être examiné"}
            </h3>
            <p>
              {missing.length
                ? `${missing.length} repère${missing.length > 1 ? "s restent" : " reste"} à documenter. Commencez par le point ci-dessous.`
                : "Toutes les cases sont cochées. Une personne doit encore examiner les preuves et consigner sa décision."}
            </p>
            {missing[0] && <p className="next-gap">{missing[0].label}</p>}
          </div>
          <button className="btn btn-navy w-100" onClick={exportFile}>
            <Icon name="download" size={18} />
            Exporter la fiche
          </button>
          <button
            className="btn btn-link clear-button"
            onClick={() => {
              setDone([]);
              setProject("");
              setOwner("");
              setScenario("code");
              setMessage("Réponses effacées de cette page.");
            }}
          >
            Réinitialiser la fiche
          </button>
          <p role="status" className="small">
            {message}
          </p>
          <p className="small">
            Cet outil ne calcule pas un score de sécurité ou de conformité.
            Aucune réponse n’est envoyée à un serveur.
          </p>
        </aside>
      </section>
      <section className="container poster-resource">
        <figure>
          <a href="./assets/affiche-agents-ln-ia.png" download>
            <img
              src="./assets/affiche-agents-ln-ia.png"
              width="1122"
              height="1402"
              loading="lazy"
              alt="Affiche LN-IA : les agents recherchent, produisent et testent. L’humain cadre, autorise et valide."
            />
          </a>
        </figure>
        <div>
          <Eyebrow>SUPPORT DE DISCUSSION</Eyebrow>
          <h2>Une affiche pour ouvrir l’atelier.</h2>
          <p>
            Quatre repères à discuter : limiter les permissions, protéger les
            données, vérifier les résultats et tester l’arrêt et la reprise.
          </p>
          <p className="small">
            Support pédagogique LN-IA généré avec IA. Il accompagne la
            discussion sans établir la sécurité d’un système.
          </p>
          <a
            className="text-link"
            href="./assets/affiche-agents-ln-ia.png"
            download
          >
            Télécharger l’affiche LN-IA
          </a>
        </div>
      </section>
      <section className="container workshop-after">
        <h2>Un essai de 45 minutes</h2>
        <div className="row gy-4">
          <div className="col-md-4">
            <Eyebrow>10 MINUTES</Eyebrow>
            <h3>Cadrer</h3>
            <p>
              Retenir une tâche, décrire le résultat et les actions interdites.
            </p>
          </div>
          <div className="col-md-4">
            <Eyebrow>20 MINUTES</Eyebrow>
            <h3>Expérimenter</h3>
            <p>
              Tester le cas normal, une erreur et un refus avec des données
              fictives.
            </p>
          </div>
          <div className="col-md-4">
            <Eyebrow>15 MINUTES</Eyebrow>
            <h3>Examiner</h3>
            <p>
              Comparer les preuves, expliquer les écarts et consigner la
              décision.
            </p>
          </div>
        </div>
        <p className="small">
          Durées proposées pour l’animation, sans mesure de performance
          associée.
        </p>
        <a className="text-link" href="./documents/fiche-atelier.md" download>
          Télécharger le conducteur d’atelier
        </a>
      </section>
    </>
  );
}
function Sources() {
  const [query, setQuery] = useState("");
  const filtered = sources.filter((s) =>
    (s.title + " " + s.org + " " + s.type)
      .toLocaleLowerCase("fr")
      .includes(query.toLocaleLowerCase("fr")),
  );
  return (
    <>
      <PageIntro
        label="VÉRIFIER · SOURCES ET MÉTHODE"
        title="Des références que vous pouvez retrouver."
        text="Chaque source a une fonction, une date et une limite. Les constats documentés, l’analyse éditoriale et les scénarios fictifs restent distincts."
      />
      <section className="container sources-layout">
        <div>
          <div className="source-search">
            <label htmlFor="search" className="form-label">
              Filtrer les références
            </label>
            <input
              type="search"
              id="search"
              className="form-control"
              placeholder="OCDE, NIST, Maroc…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <p role="status" className="small">
              {filtered.length} référence{filtered.length > 1 ? "s" : ""}{" "}
              affichée{filtered.length > 1 ? "s" : ""}
            </p>
          </div>
          <div className="source-list">
            {filtered.map((s) => (
              <section className="source-item" id={s.id} key={s.id}>
                <div className="source-top">
                  <span>
                    {s.id} · {s.org}
                  </span>
                  <span>{s.type}</span>
                </div>
                <h2>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.title}
                  </a>
                </h2>
                <p className="source-date">
                  {s.date} · Consulté le {updated}
                </p>
                <p>{s.note}</p>
              </section>
            ))}
            {!filtered.length && (
              <p>
                Aucune référence ne correspond. Essayez « OCDE » ou effacez
                votre recherche.
              </p>
            )}
          </div>
        </div>
        <aside className="source-aside">
          <h2>Comment lire ce dossier</h2>
          <ul>
            <li>
              Les chiffres 25 et 11 décrivent les participants aux entretiens.
            </li>
            <li>Les scénarios sont entièrement fictifs.</li>
            <li>Les recommandations d’atelier sont proposées par LN-IA.</li>
            <li>Une source de fournisseur est identifiée comme telle.</li>
            <li>
              La date de vérification ne garantit pas l’absence d’évolution
              ultérieure.
            </li>
          </ul>
          <h3>À propos du graphique original</h3>
          <p>
            Le billet contient un graphique d’usage. Aucune série chiffrée n’est
            reconstruite dans ce site et aucun taux mondial d’adoption n’en est
            déduit. La page originale permet de consulter ce visuel dans son
            contexte.
          </p>
          <a
            href="./documents/registre-sources.json"
            download
            className="text-link"
          >
            Télécharger le registre des sources
          </a>
        </aside>
      </section>
      <section className="container editorial-policy" id="attribution">
        <h2>Attribution et choix éditoriaux</h2>
        <p>
          Le billet d’origine est signé{" "}
          <a
            href="https://oecd.ai/en/community/sara-rendtorff-smith"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sara Rendtorff-Smith
          </a>{" "}
          et{" "}
          <a
            href="https://oecd.ai/en/community/yuko-harayama"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yuko Harayama
          </a>
          . Le document de travail cité possède pour auteur institutionnel
          l’OCDE. Cette adaptation française est une publication indépendante
          LN-IA, préparée avec une assistance IA. Elle réorganise le texte
          communiqué, ajoute des repères documentaires, des scénarios et un
          atelier.
        </p>
        <p>
          Cette publication est une adaptation d’un travail original de l’OCDE.
          Les opinions et arguments de cette adaptation ne doivent pas être
          présentés comme les positions officielles de l’OCDE ou de ses pays
          membres. Le billet original précise également que ses opinions
          n’engagent pas nécessairement le GPAI ni ses membres. En cas de
          divergence d’interprétation, consultez les textes originaux.
        </p>
        <p>
          Le rapport OCDE est proposé sous licence CC BY 4.0 avec conditions
          d’attribution et d’adaptation. Cette licence ne couvre pas
          automatiquement les contenus tiers. Les portraits des autrices,
          l’image Shutterstock et le logo OCDE ne sont pas repris. Le logo LN-IA
          provient du fichier fourni par son titulaire. L’illustration
          conceptuelle et l’affiche LN-IA ont été générées avec IA. Les schémas
          de parcours sont des constructions pédagogiques.
        </p>
        <h3>Ce qui a été enrichi</h3>
        <p>
          La définition des termes a été précisée. Les limites de l’échantillon
          et la nature déclarative des bénéfices sont rendues visibles. Le point
          NIST a été actualisé avec la publication du 29 septembre. Les cadres
          européen et marocain sont distingués. Les fonctions interactives
          exportent une préparation à la revue, sans produire de certificat ni
          d’autorisation.
        </p>
      </section>
      <section className="container editorial-policy" id="confidentialite">
        <h2>Confidentialité et accessibilité</h2>
        <p>
          Ce site statique n’intègre ni mesure d’audience, ni publicité, ni
          compte utilisateur, ni formulaire d’envoi. Les réponses de l’atelier
          restent en mémoire dans la page jusqu’au rechargement. L’export est
          créé localement dans votre navigateur. Les liens externes vous
          conduisent vers les politiques des sites concernés. L’hébergeur peut
          conserver ses journaux techniques.
        </p>
        <p>
          La navigation utilise des liens explicites, des titres structurés, des
          contrôles au clavier et des textes alternatifs. Le contenu des pages
          est prérendu pour rester lisible sans JavaScript. Les interactions
          nécessitent JavaScript. Un contrôle technique et une revue visuelle
          ont été réalisés, sans revendiquer une certification d’accessibilité.
        </p>
        <h3>Réutiliser le pack</h3>
        <p>
          Les sources du mini-site et la documentation sont incluses dans le
          ZIP. Les conditions des bibliothèques tierces, du contenu éditorial et
          des visuels sont détaillées dans le fichier de droits fourni avec le
          projet.
        </p>
      </section>
    </>
  );
}
export function App({ page }: { page: Page }) {
  useEffect(() => {
    document.title = pages[page].title + " | LN-IA";
  }, [page]);
  return (
    <>
      <div id="top" />
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <Header page={page} />
      <main id="main">
        {page === "article" ? (
          <Article />
        ) : page === "cas" ? (
          <Cases />
        ) : page === "gouvernance" ? (
          <Governance />
        ) : page === "atelier" ? (
          <Workshop />
        ) : (
          <Sources />
        )}
      </main>
      <Footer />
    </>
  );
}
