import { useState, useEffect, createContext, useContext } from 'react'
import './App.css'

const LanguageContext = createContext()

const translations = {
  fr: {
    nav: { home: 'Accueil', expertise: 'Expertise', technologies: 'Technologies', realisations: 'Réalisations', parcours: 'Parcours', contact: 'Contact' },
    hero: {
      badge: 'Bioplus Tunisie · HORIBA Medical',
      name: 'Mustapha',
      nameSerif: 'Dababi',
      role: 'Responsable Technique Hématologie',
      subtitle: 'L\'expertise technique au service de la performance du laboratoire. Maintenance, diagnostic, installation et support des solutions d\'hématologie.',
      stats: { automates: 'Automates', experience: 'Expérience', tunisie: 'Tunisie' },
      cta1: 'Découvrir',
      cta2: 'Contact',
      scroll: 'Défiler',
      imageLabel: 'Bioplus Diagnostics · HORIBA Medical',
      floating1: { title: 'Parc 200+', sub: 'HORIBA' },
      floating2: { title: 'Diagnostic', sub: 'terrain' },
    },
    expertise: {
      label: 'Profil expert',
      title: 'Une expertise construite sur le terrain',
      pillars: [
        { number: '01', title: 'Fiabilité', description: 'Continuité et fiabilité du fonctionnement des équipements de laboratoire, au cœur de l\'activité diagnostique.' },
        { number: '02', title: 'Diagnostic', description: 'Approche structurée du diagnostic matériel, logiciel et réseau — analyse des logs et identification des causes.' },
        { number: '03', title: 'Réactivité', description: 'Organisation, priorisation et intervention technique adaptée aux contraintes du terrain et aux urgences.' },
      ],
      areasLabel: 'Expertise — 3 piliers',
      areasTitle: 'Technologie · Réseaux · Innovation',
      areas: [
        { number: '01', title: 'Biomédical', items: ['Maintenance préventive & corrective', 'Installation & mise en service', 'Diagnostic matériel & logiciel', 'Analyse des logs système', 'Support avancé aux laboratoires', 'Formation des utilisateurs', 'Management d\'équipe'] },
        { number: '02', title: 'Réseaux & Connectivité', items: ['TCP/IP & diagnostic réseau', 'VPN IPsec inter-sites', 'Routeurs Cisco', 'Communication inter-sites', 'Support logiciel', 'Analyse de connectivité', 'Environnement LIS / HL7'] },
        { number: '03', title: 'Innovation & Data', items: ['Analyse de données techniques', 'Détection d\'anomalies', 'Automatisation de maintenance', 'IA appliquée à la maintenance', 'Maintenance prédictive'], note: 'Axe de développement, sans certification revendiquée.' },
      ],
    },
    tech: {
      label: 'Parc technologique',
      title: 'Un environnement couvrant plusieurs générations HORIBA',
      subtitle: 'Solutions d\'hématologie maîtrisées sur le terrain — visuels à titre illustratif.',
      featured: 'Featured — Middleware',
      source: 'Descriptions et performances issues de',
      sourceLink: 'bioplus.tn',
      sourceSuffix: '— informations publiques du distributeur officiel HORIBA Medical en Tunisie.',
      products: [
        { name: 'Yumizen P8000', subtitle: 'Middleware & validation experte', description: 'Centralisation, validation et traçabilité des résultats d\'hématologie. Interface entre automates, LIS et système qualité.', tags: ['Validation', 'LIS', 'Traçabilité'] },
        { name: 'Yumizen H2500 / H1500', subtitle: '120/h · 55 paramètres', description: 'CBC-DIFF NRBC/h, validation experte multi-sites (ISLH), 5/4 réactifs embarqués, mélange rotatif 360°.', tags: ['120/h', '55 paramètres', 'ISLH'] },
        { name: 'Yumizen H550 / H500 & ESR', subtitle: '6-Diff compact · 40/h', description: 'Autonomie 1h, chargement continu, mélange auto, ID positive, mode STAT, 3 réactifs, ASTM/HL7.', tags: ['6-Diff', '40/h', 'ASTM/HL7'] },
        { name: 'Yumizen H500 CRP', subtitle: '6 Diff · CRP intégrée', description: 'CRP intégrée pour orientation rapide. Solution rentable petite/moyenne taille, compact et convivial.', tags: ['CRP', 'Compact', '6 Diff'] },
        { name: 'Yumizen H500 & H550', subtitle: 'Petite/moyenne taille', description: 'Systèmes compacts, manipulation facile, tests sûrs. Idéal laboratoires satellites, urgences, cabinets.', tags: ['Compact', '6 Diff', 'Satellites'] },
        { name: 'Pentra 80 Range', subtitle: 'XL80 / XLR · 80/h', description: '80/h en 60s, loader 100 échantillons. NFS 5 parties + cellules immatures. XLR : 36+10 paramètres.', tags: ['80/h', 'Loader 100', 'Fluorescence'] },
        { name: 'Pentra 60 Range', subtitle: '60 C+ · 60/h', description: 'Solution intermédiaire robuste et fiable pour laboratoires régionaux. Gestion sûre des échantillons.', tags: ['60/h', 'Régional', 'Robuste'] },
        { name: 'Micros Range', subtitle: '60 / ES60 / ESV60 · 10 µL', description: 'Micro-échantillonnage 10 µL, impédance + photométrie, carte à puce, moteur pas à pas.', tags: ['10 µL', 'Impédance', 'Photométrie'] },
      ],
    },
    realisations: {
      label: 'Réalisations techniques',
      title: 'Des interventions transformées en cas d\'étude',
      projects: [
        { number: '01', title: 'Gestion d\'un parc de 200+ automates', context: 'Parc d\'automates d\'hématologie HORIBA suivi sur l\'ensemble du territoire tunisien.', approach: 'Planification et priorisation des interventions, suivi opérationnel, coordination avec le constructeur.', solution: 'Organisation centralisée du SAV, diagnostic avancé matériel/logiciel/réseau, formation continue.' },
        { number: '02', title: 'Installation & mise en service', context: 'Déploiement d\'automates en laboratoires hospitaliers et privés.', approach: 'Installation, configuration et mise en service selon protocoles constructeur.', solution: 'Vérification des performances analytiques, formation utilisateurs, documentation de prise en main.' },
        { number: '03', title: 'Diagnostic avancé', problem: 'Pannes matérielles, logicielles et réseau impactant la continuité du service.', approach: 'Analyse structurée des logs système, tests électroniques et contrôles de connectivité.', solution: 'Identification de la cause racine et intervention ciblée avec support constructeur si nécessaire.' },
        { number: '04', title: 'Support aux laboratoires', context: 'Accompagnement quotidien des biologistes et techniciens.', approach: 'Assistance téléphonique, support sur site, formation continue des utilisateurs.', solution: 'Montée en autonomie des équipes laboratoire et réduction des arrêts non planifiés.' },
        { number: '05', title: 'Connectivité & VPN IPsec', context: 'Sécurisation des communications entre trois sites via VPN IPsec avec routeurs Cisco (PFE — 3S).', problem: 'Interconnexion sécurisée et traçabilité des échanges inter-sites.', approach: 'Configuration des routeurs Cisco, mise en œuvre de tunnels VPN IPsec, validation de la connectivité.', solution: 'Sécurisation des échanges inter-sites et validation opérationnelle de la connectivité.' },
      ],
      labels: { context: 'Contexte', problem: 'Problématique', approach: 'Approche', solution: 'Solution' },
    },
    parcours: {
      label: 'Parcours',
      title: 'Un parcours concentré sur l\'hématologie',
      timeline: [
        { period: '2023 — Aujourd\'hui', title: 'Responsable Technique Hématologie', company: 'Bioplus Tunisie', items: ['Management de l\'équipe technique Hématologie', 'Suivi d\'un parc de 200+ automates HORIBA', 'Planification et priorisation des interventions', 'Diagnostic avancé matériel, logiciel et réseau', 'Installation, mise en service et maintenance', 'Formation et support avancé aux laboratoires'] },
        { period: '2020 — 2022', title: 'Technicien SAV Hématologie', company: 'Bioplus Tunisie', items: ['Installation et maintenance préventive / corrective', 'Dépannage électronique et logiciel', 'Contrôle qualité et vérification des performances', 'Assistance téléphonique et formation utilisateurs'] },
      ],
    },
    about: {
      label: 'À propos',
      title: 'Un parcours ancré sur le terrain',
      p1: 'Je m\'appelle Mustapha Dababi, Responsable Technique Hématologie chez Bioplus Tunisie.',
      p2: 'Depuis près de six ans, j\'accompagne les laboratoires de Tunisie dans ce qui ne doit jamais s\'arrêter : le diagnostic. À la tête de l\'équipe Hématologie, je veille sur un parc de plus de 200 automates HORIBA — du plus compact au plus capacitaire, jusqu\'au middleware P8000.',
      p3: 'Mon approche s\'est forgée sur le terrain, comme technicien SAV, au plus près des automates et des équipes. Écouter, analyser les logs, isoler la cause — matérielle, logicielle ou réseau — puis transmettre pour que le laboratoire gagne en autonomie.',
      p4: 'Ce regard technique vient de loin : un Bac Technique obtenu avec mention Assez Bien en 2007, deux années exigeantes en classes préparatoires à l\'IPEI El Manar jusqu\'en 2e année en 2010, puis une Licence Appliquée en TIC à la FST El Manar en 2012.',
      p5: 'Un parcours qui a fait très tôt le lien entre l\'automate et son écosystème — TCP/IP, VPN IPsec, routeurs Cisco, univers LIS — et qui m\'amène aujourd\'hui à explorer l\'analyse de données et l\'IA au service d\'une maintenance plus prédictive.',
      location: 'Tunis — tout le territoire',
      parc: '200+ automates HORIBA',
      quote: '"La technologie n\'a de valeur que si le laboratoire peut compter dessus, chaque jour."',
      tags: ['Parcours terrain', 'Diagnostic structuré', 'Transmission'],
    },
    support: {
      label: 'Espace clients',
      title: 'Support & Réclamations',
      subtitle: 'Dédié aux laboratoires équipés — suivi, assistance et traçabilité.',
      card1: { title: 'Déposer une réclamation', desc: 'Signalez une anomalie, une demande d\'intervention ou un besoin de support technique. Votre demande est tracée et prise en charge.', items: ['Formulaire guidé', 'Accusé de réception', 'Suivi de traitement'] },
      card2: { title: 'S\'enregistrer / Se connecter', desc: 'Créez votre accès ou connectez-vous à l\'espace Bioplus Support pour déposer et suivre vos réclamations en toute sécurité.', items: ['Accès sécurisé', 'Historique des demandes', 'Échanges centralisés'] },
      cta: 'Accéder au portail Support',
      note: 'Redirection vers bioplusequipements.github.io/bioplus-support/login',
    },
    contact: {
      label: 'Contact',
      title: 'Parlons technique',
      subtitle: 'Une question technique, un projet, ou souhaitez échanger sur une solution de laboratoire ?',
      phone: 'Téléphone',
      email: 'Email',
      address: 'Adresse',
      addressValue: '16 Rue Salaheddine Ayoubi, Tunis',
      form: { name: 'Nom', email: 'Email', phone: 'Téléphone', subject: 'Sujet', message: 'Message', submit: 'Envoyer', successTitle: 'Message envoyé', successMsg: 'Merci pour votre message. Je vous répondrai dans les meilleurs délais.' },
    },
    footer: {
      tagline: 'Responsable Technique Hématologie · Bioplus Tunisie / HORIBA Medical',
      nav: 'Navigation',
      automates: 'Automates',
      contact: 'Contact',
      copyright: '© 2026 Mustapha Dababi — Portfolio d\'autorité professionnelle.',
      email: 'Email',
      github: 'GitHub',
    },
    visitors: 'Visiteurs',
  },
  en: {
    nav: { home: 'Home', expertise: 'Expertise', technologies: 'Technologies', realisations: 'Achievements', parcours: 'Career', contact: 'Contact' },
    hero: {
      badge: 'Bioplus Tunisia · HORIBA Medical',
      name: 'Mustapha',
      nameSerif: 'Dababi',
      role: 'Hematology Technical Manager',
      subtitle: 'Technical expertise serving laboratory performance. Maintenance, diagnostics, installation and support for hematology solutions.',
      stats: { automates: 'Analyzers', experience: 'Experience', tunisie: 'Tunisia' },
      cta1: 'Discover',
      cta2: 'Contact',
      scroll: 'Scroll',
      imageLabel: 'Bioplus Diagnostics · HORIBA Medical',
      floating1: { title: 'Fleet 200+', sub: 'HORIBA' },
      floating2: { title: 'Diagnostics', sub: 'field' },
    },
    expertise: {
      label: 'Expert profile',
      title: 'Expertise built in the field',
      pillars: [
        { number: '01', title: 'Reliability', description: 'Continuity and reliability of laboratory equipment operation, at the heart of diagnostic activity.' },
        { number: '02', title: 'Diagnostics', description: 'Structured approach to hardware, software and network diagnostics — log analysis and cause identification.' },
        { number: '03', title: 'Responsiveness', description: 'Organization, prioritization and technical intervention adapted to field constraints and emergencies.' },
      ],
      areasLabel: 'Expertise — 3 pillars',
      areasTitle: 'Technology · Networks · Innovation',
      areas: [
        { number: '01', title: 'Biomedical', items: ['Preventive & corrective maintenance', 'Installation & commissioning', 'Hardware & software diagnostics', 'System log analysis', 'Advanced laboratory support', 'User training', 'Team management'] },
        { number: '02', title: 'Networks & Connectivity', items: ['TCP/IP & network diagnostics', 'IPsec VPN inter-site', 'Cisco routers', 'Inter-site communication', 'Software support', 'Connectivity analysis', 'LIS / HL7 environment'] },
        { number: '03', title: 'Innovation & Data', items: ['Technical data analysis', 'Anomaly detection', 'Maintenance automation', 'AI applied to maintenance', 'Predictive maintenance'], note: 'Development area, no certification claimed.' },
      ],
    },
    tech: {
      label: 'Technology fleet',
      title: 'An environment spanning multiple HORIBA generations',
      subtitle: 'Hematology solutions mastered in the field — visuals for illustration.',
      featured: 'Featured — Middleware',
      source: 'Descriptions and performance from',
      sourceLink: 'bioplus.tn',
      sourceSuffix: '— public information from the official HORIBA Medical distributor in Tunisia.',
      products: [
        { name: 'Yumizen P8000', subtitle: 'Middleware & expert validation', description: 'Centralization, validation and traceability of hematology results. Interface between analyzers, LIS and quality system.', tags: ['Validation', 'LIS', 'Traceability'] },
        { name: 'Yumizen H2500 / H1500', subtitle: '120/h · 55 parameters', description: 'CBC-DIFF NRBC/h, multi-site expert validation (ISLH), 5/4 onboard reagents, 360° rotary mixing.', tags: ['120/h', '55 parameters', 'ISLH'] },
        { name: 'Yumizen H550 / H500 & ESR', subtitle: '6-Diff compact · 40/h', description: '1h autonomy, continuous loading, auto mixing, positive ID, STAT mode, 3 reagents, ASTM/HL7.', tags: ['6-Diff', '40/h', 'ASTM/HL7'] },
        { name: 'Yumizen H500 CRP', subtitle: '6 Diff · Integrated CRP', description: 'Integrated CRP for rapid orientation. Cost-effective small/medium solution, compact and user-friendly.', tags: ['CRP', 'Compact', '6 Diff'] },
        { name: 'Yumizen H500 & H550', subtitle: 'Small/medium size', description: 'Compact systems, easy handling, safe tests. Ideal for satellite labs, emergencies, clinics.', tags: ['Compact', '6 Diff', 'Satellites'] },
        { name: 'Pentra 80 Range', subtitle: 'XL80 / XLR · 80/h', description: '80/h in 60s, 100-sample loader. NFS 5 parts + immature cells. XLR: 36+10 parameters.', tags: ['80/h', 'Loader 100', 'Fluorescence'] },
        { name: 'Pentra 60 Range', subtitle: '60 C+ · 60/h', description: 'Robust and reliable intermediate solution for regional labs. Safe sample management.', tags: ['60/h', 'Regional', 'Robust'] },
        { name: 'Micros Range', subtitle: '60 / ES60 / ESV60 · 10 µL', description: '10 µL micro-sampling, impedance + photometry, smart card, stepper motor.', tags: ['10 µL', 'Impedance', 'Photometry'] },
      ],
    },
    realisations: {
      label: 'Technical achievements',
      title: 'Interventions transformed into case studies',
      projects: [
        { number: '01', title: 'Managing a fleet of 200+ analyzers', context: 'HORIBA hematology analyzer fleet monitored across Tunisia.', approach: 'Planning and prioritization of interventions, operational monitoring, coordination with manufacturer.', solution: 'Centralized after-sales organization, advanced hardware/software/network diagnostics, continuous training.' },
        { number: '02', title: 'Installation & commissioning', context: 'Deployment of analyzers in hospital and private laboratories.', approach: 'Installation, configuration and commissioning per manufacturer protocols.', solution: 'Analytical performance verification, user training, handover documentation.' },
        { number: '03', title: 'Advanced diagnostics', problem: 'Hardware, software and network failures impacting service continuity.', approach: 'Structured system log analysis, electronic testing and connectivity checks.', solution: 'Root cause identification and targeted intervention with manufacturer support if needed.' },
        { number: '04', title: 'Laboratory support', context: 'Daily support for biologists and technicians.', approach: 'Phone assistance, on-site support, continuous user training.', solution: 'Increased laboratory team autonomy and reduced unplanned downtime.' },
        { number: '05', title: 'Connectivity & IPsec VPN', context: 'Securing communications between three sites via IPsec VPN with Cisco routers (Final Year Project — 3S).', problem: 'Secure inter-site interconnection and traceability of exchanges.', approach: 'Cisco router configuration, IPsec VPN tunnel implementation, connectivity validation.', solution: 'Secured inter-site exchanges and operational connectivity validation.' },
      ],
      labels: { context: 'Context', problem: 'Problem', approach: 'Approach', solution: 'Solution' },
    },
    parcours: {
      label: 'Career',
      title: 'A career focused on hematology',
      timeline: [
        { period: '2023 — Present', title: 'Hematology Technical Manager', company: 'Bioplus Tunisia', items: ['Hematology technical team management', 'Monitoring a fleet of 200+ HORIBA analyzers', 'Planning and prioritization of interventions', 'Advanced hardware, software and network diagnostics', 'Installation, commissioning and maintenance', 'User training and advanced laboratory support'] },
        { period: '2020 — 2022', title: 'Hematology After-Sales Technician', company: 'Bioplus Tunisia', items: ['Installation and preventive / corrective maintenance', 'Electronic and software troubleshooting', 'Quality control and performance verification', 'Phone assistance and user training'] },
      ],
    },
    about: {
      label: 'About',
      title: 'A career rooted in the field',
      p1: 'My name is Mustapha Dababi, Hematology Technical Manager at Bioplus Tunisia.',
      p2: 'For nearly six years, I have been supporting Tunisia laboratories in what must never stop: diagnostics. Leading the Hematology team, I oversee a fleet of over 200 HORIBA analyzers — from the most compact to the highest capacity, up to the P8000 middleware.',
      p3: 'My approach was forged in the field, as an after-sales technician, close to analyzers and teams. Listen, analyze logs, isolate the cause — hardware, software or network — then transfer knowledge so the laboratory gains autonomy.',
      p4: 'This technical perspective comes from afar: a Technical Baccalaureate with honors in 2007, two demanding years in preparatory classes at IPEI El Manar until 2nd year in 2010, then an Applied IT Degree at FST El Manar in 2012.',
      p5: 'A journey that early connected the analyzer to its ecosystem — TCP/IP, IPsec VPN, Cisco routers, LIS universe — and that now leads me to explore data analysis and AI for more predictive maintenance.',
      location: 'Tunis — nationwide coverage',
      parc: '200+ HORIBA analyzers',
      quote: '"Technology has value only if the laboratory can rely on it, every day."',
      tags: ['Field experience', 'Structured diagnostics', 'Knowledge transfer'],
    },
    support: {
      label: 'Client area',
      title: 'Support & Claims',
      subtitle: 'Dedicated to equipped laboratories — monitoring, assistance and traceability.',
      card1: { title: 'Submit a claim', desc: 'Report an anomaly, intervention request or technical support need. Your request is tracked and handled.', items: ['Guided form', 'Acknowledgment', 'Processing tracking'] },
      card2: { title: 'Register / Sign in', desc: 'Create your account or sign in to Bioplus Support to submit and track your claims securely.', items: ['Secure access', 'Request history', 'Centralized exchanges'] },
      cta: 'Access Support portal',
      note: 'Redirect to bioplusequipements.github.io/bioplus-support/login',
    },
    contact: {
      label: 'Contact',
      title: 'Let\'s talk technical',
      subtitle: 'A technical question, a project, or want to discuss a laboratory solution?',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      addressValue: '16 Rue Salaheddine Ayoubi, Tunis',
      form: { name: 'Name', email: 'Email', phone: 'Phone', subject: 'Subject', message: 'Message', submit: 'Send', successTitle: 'Message sent', successMsg: 'Thank you for your message. I will respond as soon as possible.' },
    },
    footer: {
      tagline: 'Hematology Technical Manager · Bioplus Tunisia / HORIBA Medical',
      nav: 'Navigation',
      automates: 'Analyzers',
      contact: 'Contact',
      copyright: '© 2026 Mustapha Dababi — Professional authority portfolio.',
      email: 'Email',
      github: 'GitHub',
    },
    visitors: 'Visitors',
  },
}

function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'fr'
  })

  const toggleLang = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr'
    setLang(newLang)
    localStorage.setItem('lang', newLang)
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

function useLanguage() {
  return useContext(LanguageContext)
}

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

const ADMIN_HASH = '#admin2026'
const NTFY_TOPIC = 'mustapha-dababi-portfolio'

function VisitorCounter() {
  const [count, setCount] = useState(null)
  const isAdmin = window.location.hash === ADMIN_HASH

  useEffect(() => {
    if (!isAdmin) return

    const fetchCount = async () => {
      try {
        const res = await fetch(`https://api.countapi.xyz/hit/${NTFY_TOPIC}/visitors`)
        const data = await res.json()
        setCount(data.value)
      } catch {
        const local = parseInt(localStorage.getItem('visitor_count') || '0') + 1
        localStorage.setItem('visitor_count', local.toString())
        setCount(local)
      }
    }
    fetchCount()
  }, [isAdmin])

  useEffect(() => {
    if (isAdmin) return
    const notify = async () => {
      try {
        await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
          method: 'POST',
          body: `New visitor on your portfolio - ${new Date().toLocaleString()}`,
          Title: 'Portfolio Visit',
          Priority: 'default',
          Tags: 'eyes',
        })
      } catch {}
    }
    const hasNotified = sessionStorage.getItem('notified')
    if (!hasNotified) {
      notify()
      sessionStorage.setItem('notified', '1')
    }
  }, [isAdmin])

  if (!isAdmin || count === null) return null

  return (
    <div className="visitor-counter">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 3C4.5 3 1.5 8 1.5 8C1.5 8 4.5 13 8 13C11.5 13 14.5 8 14.5 8C14.5 8 11.5 3 8 3Z" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
      <span>{count}</span>
    </div>
  )
}

function Navbar() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggleLang, t } = useLanguage()

  const links = [
    { href: '#accueil', label: t.nav.home },
    { href: '#expertise', label: t.nav.expertise },
    { href: '#technologies', label: t.nav.technologies },
    { href: '#realisations', label: t.nav.realisations },
    { href: '#parcours', label: t.nav.parcours },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#accueil" className="navbar__logo">
          MD<span className="navbar__logo-dot">.</span>
        </a>
        <div className={`navbar__links ${menuOpen ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="navbar__actions">
          <VisitorCounter />
          <button className="navbar__lang" onClick={toggleLang} aria-label="Toggle language">
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button
            className={`navbar__burger ${menuOpen ? 'is-active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="accueil" className="hero">
      <div className="hero__bg">
        <div className="hero__noise"></div>
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
      </div>
      <div className="container hero__content">
        <div className="hero__text">
          <div className="hero__badge animate-on-scroll">
            <span className="hero__badge-line"></span>
            {h.badge}
          </div>
          <h1 className="hero__title animate-on-scroll">
            {h.name}<br />
            <span className="hero__title-serif">{h.nameSerif}</span>
          </h1>
          <p className="hero__role animate-on-scroll">{h.role}</p>
          <p className="hero__subtitle animate-on-scroll">{h.subtitle}</p>
          <div className="hero__stats animate-on-scroll">
            <div className="hero__stat">
              <span className="hero__stat-number">200+</span>
              <span className="hero__stat-label">{h.stats.automates}</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">6<span className="hero__stat-unit"> {h.stats.experience.toLowerCase()}</span></span>
              <span className="hero__stat-label">{h.stats.experience}</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">100<span className="hero__stat-unit">%</span></span>
              <span className="hero__stat-label">{h.stats.tunisie}</span>
            </div>
          </div>
          <div className="hero__cta animate-on-scroll">
            <a href="#expertise" className="btn btn-primary">
              {h.cta1}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">{h.cta2}</a>
          </div>
        </div>
        <div className="hero__visual animate-on-scroll">
          <div className="hero__image-frame">
            <img src="/images/mustapha-portrait.png" alt="Mustapha Dababi" />
            <div className="hero__image-label">{h.imageLabel}</div>
          </div>
          <div className="hero__floating-card hero__floating-card--1">
            <span className="hero__floating-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L18 6V10C18 14.4 14.4 18 10 19C5.6 18 2 14.4 2 10V6L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M7 10L9.5 12.5L14 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div>
              <strong>{h.floating1.title}</strong>
              <span>{h.floating1.sub}</span>
            </div>
          </div>
          <div className="hero__floating-card hero__floating-card--2">
            <span className="hero__floating-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M13 13L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M7 9L8.5 10.5L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div>
              <strong>{h.floating2.title}</strong>
              <span>{h.floating2.sub}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <span>{h.scroll}</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  )
}

function Expertise() {
  const { t } = useLanguage()
  const e = t.expertise

  return (
    <section id="expertise" className="section section--alt">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">{e.label}</span>
          <h2 className="section-title">{e.title}</h2>
        </div>

        <div className="expertise__pillars">
          {e.pillars.map((p, i) => (
            <div key={p.number} className="expertise__pillar animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="expertise__pillar-number">{p.number}</span>
              <h3 className="expertise__pillar-title">{p.title}</h3>
              <p className="expertise__pillar-desc">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="expertise__areas">
          <div className="section-header animate-on-scroll">
            <span className="section-label">{e.areasLabel}</span>
            <h2 className="section-title">{e.areasTitle}</h2>
          </div>
          <div className="expertise__areas-grid">
            {e.areas.map((area, i) => (
              <div key={area.number} className="expertise__area card animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="expertise__area-header">
                  <span className="expertise__area-number">{area.number}</span>
                  <h3 className="expertise__area-title">{area.title}</h3>
                </div>
                <ul className="expertise__area-list">
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {area.note && <p className="expertise__area-note">{area.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Technologies() {
  const { t } = useLanguage()
  const tech = t.tech

  const productImages = {
    'Yumizen P8000': '/images/yumizen-2.0.gif',
    'Yumizen H2500 / H1500': '/images/automates/yumizen-h2500-h1500.png',
    'Yumizen H550 / H500 & ESR': '/images/automates/yumizen-h550-h500-esr.png',
    'Yumizen H500 CRP': '/images/automates/yumizen-h500-crp.png',
    'Yumizen H500 & H550': '/images/automates/yumizen-h500-h550.png',
    'Pentra 80 Range': '/images/automates/pentra-80-range.png',
    'Pentra 60 Range': '/images/automates/pentra-60-range.png',
    'Micros Range': '/images/automates/micros-range.png',
  }

  return (
    <section id="technologies" className="section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">{tech.label}</span>
          <h2 className="section-title">{tech.title}</h2>
          <p className="section-subtitle">{tech.subtitle}</p>
        </div>

        <div className="tech__grid">
          {tech.products.map((product, i) => (
            <div
              key={product.name}
              className={`tech__card card animate-on-scroll ${product.featured ? 'tech__card--featured' : ''}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {product.featured && <span className="tech__badge">{tech.featured}</span>}
              {productImages[product.name] && (
                <div className="tech__card-image">
                  <img src={productImages[product.name]} alt={product.name} loading="lazy" />
                </div>
              )}
              <div className="tech__card-header">
                <h3 className="tech__card-title">{product.name}</h3>
                <p className="tech__card-subtitle">{product.subtitle}</p>
              </div>
              <p className="tech__card-desc">{product.description}</p>
              <div className="tech__card-tags">
                {product.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="tech__source animate-on-scroll">
          {tech.source}{' '}
          <a href="https://bioplus.tn/categorie-produit/hematologie/" target="_blank" rel="noopener noreferrer">
            {tech.sourceLink}
          </a>
          {' '}{tech.sourceSuffix}
        </p>
      </div>
    </section>
  )
}

function Realisations() {
  const { t } = useLanguage()
  const r = t.realisations

  return (
    <section id="realisations" className="section section--alt">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">{r.label}</span>
          <h2 className="section-title">{r.title}</h2>
        </div>

        <div className="realisations__list">
          {r.projects.map((project, i) => (
            <div key={project.number} className="realisations__item animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="realisations__item-number">{project.number}</div>
              <div className="realisations__item-content">
                <h3 className="realisations__item-title">{project.title}</h3>
                <div className="realisations__item-details">
                  {project.context && (
                    <div className="realisations__item-block">
                      <span className="realisations__item-label">{r.labels.context}</span>
                      <p>{project.context}</p>
                    </div>
                  )}
                  {project.problem && (
                    <div className="realisations__item-block">
                      <span className="realisations__item-label">{r.labels.problem}</span>
                      <p>{project.problem}</p>
                    </div>
                  )}
                  <div className="realisations__item-block">
                    <span className="realisations__item-label">{r.labels.approach}</span>
                    <p>{project.approach}</p>
                  </div>
                  <div className="realisations__item-block">
                    <span className="realisations__item-label">{r.labels.solution}</span>
                    <p>{project.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Parcours() {
  const { t } = useLanguage()
  const p = t.parcours

  return (
    <section id="parcours" className="section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">{p.label}</span>
          <h2 className="section-title">{p.title}</h2>
        </div>

        <div className="timeline">
          {p.timeline.map((item, i) => (
            <div key={item.period} className="timeline__item animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="timeline__marker">
                <div className="timeline__dot"></div>
                {i < p.timeline.length - 1 && <div className="timeline__line"></div>}
              </div>
              <div className="timeline__content card">
                <span className="timeline__period">{item.period}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <span className="timeline__company">{item.company}</span>
                <ul className="timeline__list">
                  {item.items.map((listItem) => (
                    <li key={listItem}>{listItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section id="apropos" className="section section--alt">
      <div className="container">
        <div className="about__grid">
          <div className="about__text">
            <div className="animate-on-scroll">
              <span className="section-label">{a.label}</span>
              <h2 className="section-title">{a.title}</h2>
            </div>
            <div className="about__content animate-on-scroll">
              <p>{a.p1}</p>
              <p>{a.p2}</p>
              <p>{a.p3}</p>
              <p>{a.p4}</p>
              <p>{a.p5}</p>
            </div>
            <div className="about__meta animate-on-scroll">
              <div className="about__meta-item">
                <span className="about__meta-label">{t.visitors === 'Visiteurs' ? 'Localisation' : 'Location'}</span>
                <span className="about__meta-value">{a.location}</span>
              </div>
              <div className="about__meta-item">
                <span className="about__meta-label">{t.visitors === 'Visiteurs' ? 'Parc' : 'Fleet'}</span>
                <span className="about__meta-value">{a.parc}</span>
              </div>
            </div>
          </div>
          <div className="about__quote animate-on-scroll">
            <blockquote>{a.quote}</blockquote>
            <div className="about__quote-tags">
              {a.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Support() {
  const { t } = useLanguage()
  const s = t.support

  return (
    <section id="support" className="section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">{s.label}</span>
          <h2 className="section-title">{s.title}</h2>
          <p className="section-subtitle">{s.subtitle}</p>
        </div>

        <div className="support__grid">
          <div className="support__card card animate-on-scroll">
            <div className="support__icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 3L32 10V18C32 26 26 32 18 34C10 32 4 26 4 18V10L18 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M12 18L16 22L26 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="support__card-title">{s.card1.title}</h3>
            <p className="support__card-desc">{s.card1.desc}</p>
            <ul className="support__card-list">
              {s.card1.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="support__card card animate-on-scroll" style={{ transitionDelay: '100ms' }}>
            <div className="support__icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="5" y="14" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M11 14V10C11 6 14 3 18 3C22 3 25 6 25 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="18" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="support__card-title">{s.card2.title}</h3>
            <p className="support__card-desc">{s.card2.desc}</p>
            <ul className="support__card-list">
              {s.card2.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="support__cta animate-on-scroll">
          <a
            href="https://bioplusequipements.github.io/bioplus-support/login"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {s.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="support__cta-note">{s.note}</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <div className="animate-on-scroll">
              <span className="section-label">{c.label}</span>
              <h2 className="section-title">{c.title}</h2>
              <p className="section-subtitle">{c.subtitle}</p>
            </div>

            <div className="contact__details animate-on-scroll">
              <a href="tel:+21622700017" className="contact__detail">
                <span className="contact__detail-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3.5 3h3l1.5 3.5-2 1.5c1 2 2.5 3.5 4.5 4.5l1.5-2L15.5 12v3c0 .5-.5 1-1 1C8 16 2 10 2 3.5 2 3 2.5 3 3 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <span className="contact__detail-label">{c.phone}</span>
                  <span className="contact__detail-value">+216 22 700 017</span>
                </div>
              </a>
              <a href="mailto:m.dababi@hotmail.com" className="contact__detail">
                <span className="contact__detail-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="3.5" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M2 5.5L9 11L16 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <span className="contact__detail-label">{c.email}</span>
                  <span className="contact__detail-value">m.dababi@hotmail.com</span>
                </div>
              </a>
              <div className="contact__detail">
                <span className="contact__detail-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 16.5s-6-5-6-9.5C3 4.5 5.5 2.5 8 2.5c.5 0 1 .5 1 .5s.5-.5 1-.5c2.5 0 5 2 5 4.5 0 4.5-6 9.5-6 9.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="1.8" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                </span>
                <div>
                  <span className="contact__detail-label">{c.address}</span>
                  <span className="contact__detail-value">{c.addressValue}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-wrapper animate-on-scroll">
            {submitted ? (
              <div className="contact__success">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="var(--accent)" strokeWidth="1.5"/>
                  <path d="M16 24L21 29L32 18" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3>{c.form.successTitle}</h3>
                <p>{c.form.successMsg}</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name">{c.form.name} *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="email">{c.form.email} *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="phone">{c.form.phone}</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="subject">{c.form.subject} *</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact__form-group">
                  <label htmlFor="message">{c.form.message} *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  {c.form.submit}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7L13 1.5L9.5 13L7 9.5L1 7Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">MD<span className="footer__logo-dot">.</span></span>
            <p className="footer__tagline">{f.tagline}</p>
          </div>
          <div className="footer__col">
            <h4>{f.nav}</h4>
            <a href="#expertise">{t.nav.expertise}</a>
            <a href="#technologies">{t.nav.technologies}</a>
            <a href="#realisations">{t.nav.realisations}</a>
            <a href="#parcours">{t.nav.parcours}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="footer__col">
            <h4>{f.automates}</h4>
            <a href="#technologies">Yumizen P8000</a>
            <a href="#technologies">Yumizen H500/H550</a>
            <a href="#technologies">Pentra 80</a>
            <a href="#technologies">Micros Range</a>
          </div>
          <div className="footer__col">
            <h4>{f.contact}</h4>
            <a href="mailto:m.dababi@hotmail.com">m.dababi@hotmail.com</a>
            <a href="tel:+21622700017">+216 22 700 017</a>
            <span>Tunis, Tunisie</span>
          </div>
        </div>
        <hr className="divider" />
        <div className="footer__bottom">
          <p>{f.copyright}</p>
          <div className="footer__bottom-links">
            <a href="mailto:m.dababi@hotmail.com">{f.email}</a>
            <a href="https://github.com/mustapha-dababi" target="_blank" rel="noopener noreferrer">{f.github}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

function AppContent() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Technologies />
        <Realisations />
        <Parcours />
        <About />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
