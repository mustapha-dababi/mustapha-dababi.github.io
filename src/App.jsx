import { useState, useEffect } from 'react'
import './App.css'

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

function Navbar() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#technologies', label: 'Technologies' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#parcours', label: 'Parcours' },
    { href: '#contact', label: 'Contact' },
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
    </nav>
  )
}

function Hero() {
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
            Bioplus Tunisie · HORIBA Medical
          </div>
          <h1 className="hero__title animate-on-scroll">
            Mustapha<br />
            <span className="hero__title-serif">Dababi</span>
          </h1>
          <p className="hero__role animate-on-scroll">Responsable Technique Hématologie</p>
          <p className="hero__subtitle animate-on-scroll">
            L'expertise technique au service de la performance du laboratoire.
            Maintenance, diagnostic, installation et support des solutions d'hématologie.
          </p>
          <div className="hero__stats animate-on-scroll">
            <div className="hero__stat">
              <span className="hero__stat-number">200+</span>
              <span className="hero__stat-label">Automates</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">6<span className="hero__stat-unit">ans</span></span>
              <span className="hero__stat-label">Expérience</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">100<span className="hero__stat-unit">%</span></span>
              <span className="hero__stat-label">Tunisie</span>
            </div>
          </div>
          <div className="hero__cta animate-on-scroll">
            <a href="#expertise" className="btn btn-primary">
              Découvrir
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">Contact</a>
          </div>
        </div>
      </div>
      <div className="hero__scroll">
        <span>Défiler</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  )
}

function Expertise() {
  const pillars = [
    {
      number: '01',
      title: 'Fiabilité',
      description: 'Continuité et fiabilité du fonctionnement des équipements de laboratoire, au cœur de l\'activité diagnostique.',
    },
    {
      number: '02',
      title: 'Diagnostic',
      description: 'Approche structurée du diagnostic matériel, logiciel et réseau — analyse des logs et identification des causes.',
    },
    {
      number: '03',
      title: 'Réactivité',
      description: 'Organisation, priorisation et intervention technique adaptée aux contraintes du terrain et aux urgences.',
    },
  ]

  const areas = [
    {
      number: '01',
      title: 'Biomédical',
      items: ['Maintenance préventive & corrective', 'Installation & mise en service', 'Diagnostic matériel & logiciel', 'Analyse des logs système', 'Support avancé aux laboratoires', 'Formation des utilisateurs', 'Management d\'équipe'],
    },
    {
      number: '02',
      title: 'Réseaux & Connectivité',
      items: ['TCP/IP & diagnostic réseau', 'VPN IPsec inter-sites', 'Routeurs Cisco', 'Communication inter-sites', 'Support logiciel', 'Analyse de connectivité', 'Environnement LIS / HL7'],
    },
    {
      number: '03',
      title: 'Innovation & Data',
      items: ['Analyse de données techniques', 'Détection d\'anomalies', 'Automatisation de maintenance', 'IA appliquée à la maintenance', 'Maintenance prédictive'],
      note: 'Axe de développement, sans certification revendiquée.',
    },
  ]

  return (
    <section id="expertise" className="section section--alt">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Profil expert</span>
          <h2 className="section-title">Une expertise construite sur le terrain</h2>
        </div>

        <div className="expertise__pillars">
          {pillars.map((p, i) => (
            <div key={p.number} className="expertise__pillar animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="expertise__pillar-number">{p.number}</span>
              <h3 className="expertise__pillar-title">{p.title}</h3>
              <p className="expertise__pillar-desc">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="expertise__areas">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Expertise — 3 piliers</span>
            <h2 className="section-title">Technologie · Réseaux · Innovation</h2>
          </div>
          <div className="expertise__areas-grid">
            {areas.map((area, i) => (
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
  const products = [
    {
      name: 'Yumizen P8000',
      subtitle: 'Middleware & validation experte',
      description: 'Centralisation, validation et traçabilité des résultats d\'hématologie. Interface entre automates, LIS et système qualité.',
      tags: ['Validation', 'LIS', 'Traçabilité'],
      featured: true,
    },
    {
      name: 'Yumizen H2500 / H1500',
      subtitle: '120/h · 55 paramètres',
      description: 'CBC-DIFF NRBC/h, validation experte multi-sites (ISLH), 5/4 réactifs embarqués, mélange rotatif 360°.',
      tags: ['120/h', '55 paramètres', 'ISLH'],
    },
    {
      name: 'Yumizen H550 / H500 & ESR',
      subtitle: '6-Diff compact · 40/h',
      description: 'Autonomie 1h, chargement continu, mélange auto, ID positive, mode STAT, 3 réactifs, ASTM/HL7.',
      tags: ['6-Diff', '40/h', 'ASTM/HL7'],
    },
    {
      name: 'Yumizen H500 CRP',
      subtitle: '6 Diff · CRP intégrée',
      description: 'CRP intégrée pour orientation rapide. Solution rentable petite/moyenne taille, compact et convivial.',
      tags: ['CRP', 'Compact', '6 Diff'],
    },
    {
      name: 'Yumizen H500 & H550',
      subtitle: 'Petite/moyenne taille',
      description: 'Systèmes compacts, manipulation facile, tests sûrs. Idéal laboratoires satellites, urgences, cabinets.',
      tags: ['Compact', '6 Diff', 'Satellites'],
    },
    {
      name: 'Pentra 80 Range',
      subtitle: 'XL80 / XLR · 80/h',
      description: '80/h en 60s, loader 100 échantillons. NFS 5 parties + cellules immatures. XLR : 36+10 paramètres.',
      tags: ['80/h', 'Loader 100', 'Fluorescence'],
    },
    {
      name: 'Pentra 60 Range',
      subtitle: '60 C+ · 60/h',
      description: 'Solution intermédiaire robuste et fiable pour laboratoires régionaux. Gestion sûre des échantillons.',
      tags: ['60/h', 'Régional', 'Robuste'],
    },
    {
      name: 'Micros Range',
      subtitle: '60 / ES60 / ESV60 · 10 µL',
      description: 'Micro-échantillonnage 10 µL, impédance + photométrie, carte à puce, moteur pas à pas.',
      tags: ['10 µL', 'Impédance', 'Photométrie'],
    },
  ]

  return (
    <section id="technologies" className="section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Parc technologique</span>
          <h2 className="section-title">Un environnement couvrant plusieurs générations HORIBA</h2>
          <p className="section-subtitle">
            Solutions d'hématologie maîtrisées sur le terrain — visuels à titre illustratif.
          </p>
        </div>

        <div className="tech__grid">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`tech__card card animate-on-scroll ${product.featured ? 'tech__card--featured' : ''}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {product.featured && <span className="tech__badge">Featured — Middleware</span>}
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
          Descriptions et performances issues de{' '}
          <a href="https://bioplus.tn/categorie-produit/hematologie/" target="_blank" rel="noopener noreferrer">
            bioplus.tn
          </a>
          {' '}— informations publiques du distributeur officiel HORIBA Medical en Tunisie.
        </p>
      </div>
    </section>
  )
}

function Realisations() {
  const projects = [
    {
      number: '01',
      title: 'Gestion d\'un parc de 200+ automates',
      context: 'Parc d\'automates d\'hématologie HORIBA suivi sur l\'ensemble du territoire tunisien.',
      approach: 'Planification et priorisation des interventions, suivi opérationnel, coordination avec le constructeur.',
      solution: 'Organisation centralisée du SAV, diagnostic avancé matériel/logiciel/réseau, formation continue.',
    },
    {
      number: '02',
      title: 'Installation & mise en service',
      context: 'Déploiement d\'automates en laboratoires hospitaliers et privés.',
      approach: 'Installation, configuration et mise en service selon protocoles constructeur.',
      solution: 'Vérification des performances analytiques, formation utilisateurs, documentation de prise en main.',
    },
    {
      number: '03',
      title: 'Diagnostic avancé',
      problem: 'Pannes matérielles, logicielles et réseau impactant la continuité du service.',
      approach: 'Analyse structurée des logs système, tests électroniques et contrôles de connectivité.',
      solution: 'Identification de la cause racine et intervention ciblée avec support constructeur si nécessaire.',
    },
    {
      number: '04',
      title: 'Support aux laboratoires',
      context: 'Accompagnement quotidien des biologistes et techniciens.',
      approach: 'Assistance téléphonique, support sur site, formation continue des utilisateurs.',
      solution: 'Montée en autonomie des équipes laboratoire et réduction des arrêts non planifiés.',
    },
    {
      number: '05',
      title: 'Connectivité & VPN IPsec',
      context: 'Sécurisation des communications entre trois sites via VPN IPsec avec routeurs Cisco (PFE — 3S).',
      problem: 'Interconnexion sécurisée et traçabilité des échanges inter-sites.',
      approach: 'Configuration des routeurs Cisco, mise en œuvre de tunnels VPN IPsec, validation de la connectivité.',
      solution: 'Sécurisation des échanges inter-sites et validation opérationnelle de la connectivité.',
    },
  ]

  return (
    <section id="realisations" className="section section--alt">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Réalisations techniques</span>
          <h2 className="section-title">Des interventions transformées en cas d'étude</h2>
        </div>

        <div className="realisations__list">
          {projects.map((project, i) => (
            <div key={project.number} className="realisations__item animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="realisations__item-number">{project.number}</div>
              <div className="realisations__item-content">
                <h3 className="realisations__item-title">{project.title}</h3>
                <div className="realisations__item-details">
                  {project.context && (
                    <div className="realisations__item-block">
                      <span className="realisations__item-label">Contexte</span>
                      <p>{project.context}</p>
                    </div>
                  )}
                  {project.problem && (
                    <div className="realisations__item-block">
                      <span className="realisations__item-label">Problématique</span>
                      <p>{project.problem}</p>
                    </div>
                  )}
                  <div className="realisations__item-block">
                    <span className="realisations__item-label">Approche</span>
                    <p>{project.approach}</p>
                  </div>
                  <div className="realisations__item-block">
                    <span className="realisations__item-label">Solution</span>
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
  const timeline = [
    {
      period: '2023 — Aujourd\'hui',
      title: 'Responsable Technique Hématologie',
      company: 'Bioplus Tunisie',
      items: [
        'Management de l\'équipe technique Hématologie',
        'Suivi d\'un parc de 200+ automates HORIBA',
        'Planification et priorisation des interventions',
        'Diagnostic avancé matériel, logiciel et réseau',
        'Installation, mise en service et maintenance',
        'Formation et support avancé aux laboratoires',
      ],
    },
    {
      period: '2020 — 2022',
      title: 'Technicien SAV Hématologie',
      company: 'Bioplus Tunisie',
      items: [
        'Installation et maintenance préventive / corrective',
        'Dépannage électronique et logiciel',
        'Contrôle qualité et vérification des performances',
        'Assistance téléphonique et formation utilisateurs',
      ],
    },
  ]

  return (
    <section id="parcours" className="section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Parcours</span>
          <h2 className="section-title">Un parcours concentré sur l'hématologie</h2>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={item.period} className="timeline__item animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="timeline__marker">
                <div className="timeline__dot"></div>
                {i < timeline.length - 1 && <div className="timeline__line"></div>}
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
  return (
    <section id="apropos" className="section section--alt">
      <div className="container">
        <div className="about__grid">
          <div className="about__text">
            <div className="animate-on-scroll">
              <span className="section-label">À propos</span>
              <h2 className="section-title">Un parcours ancré sur le terrain</h2>
            </div>
            <div className="about__content animate-on-scroll">
              <p>
                Je m'appelle <strong>Mustapha Dababi</strong>, Responsable Technique Hématologie chez <strong>Bioplus Tunisie</strong>.
              </p>
              <p>
                Depuis près de six ans, j'accompagne les laboratoires de Tunisie dans ce qui ne doit jamais s'arrêter : le diagnostic. À la tête de l'équipe Hématologie, je veille sur un parc de plus de <strong>200 automates HORIBA</strong> — du plus compact au plus capacitaire, jusqu'au middleware <strong>P8000</strong>.
              </p>
              <p>
                Mon approche s'est forgée sur le terrain, comme technicien SAV, au plus près des automates et des équipes. Écouter, analyser les logs, isoler la cause — matérielle, logicielle ou réseau — puis transmettre pour que le laboratoire gagne en autonomie.
              </p>
              <p>
                Ce regard technique vient de loin : un <strong>Bac Technique obtenu avec mention Assez Bien en 2007</strong>, deux années exigeantes en classes préparatoires à l'<strong>IPEI El Manar</strong> jusqu'en 2e année en 2010, puis une <strong>Licence Appliquée en TIC à la FST El Manar en 2012</strong>.
              </p>
              <p>
                Un parcours qui a fait très tôt le lien entre l'automate et son écosystème — TCP/IP, VPN IPsec, routeurs Cisco, univers LIS — et qui m'amène aujourd'hui à explorer l'analyse de données et l'IA au service d'une maintenance plus prédictive.
              </p>
            </div>
            <div className="about__meta animate-on-scroll">
              <div className="about__meta-item">
                <span className="about__meta-label">Localisation</span>
                <span className="about__meta-value">Tunis — tout le territoire</span>
              </div>
              <div className="about__meta-item">
                <span className="about__meta-label">Parc</span>
                <span className="about__meta-value">200+ automates HORIBA</span>
              </div>
            </div>
          </div>
          <div className="about__quote animate-on-scroll">
            <blockquote>
              "La technologie n'a de valeur que si le laboratoire peut compter dessus, chaque jour."
            </blockquote>
            <div className="about__quote-tags">
              <span className="tag">Parcours terrain</span>
              <span className="tag">Diagnostic structuré</span>
              <span className="tag">Transmission</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Support() {
  return (
    <section id="support" className="section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Espace clients</span>
          <h2 className="section-title">Support & Réclamations</h2>
          <p className="section-subtitle">
            Dédié aux laboratoires équipés — suivi, assistance et traçabilité.
          </p>
        </div>

        <div className="support__grid">
          <div className="support__card card animate-on-scroll">
            <div className="support__icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 3L32 10V18C32 26 26 32 18 34C10 32 4 26 4 18V10L18 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M12 18L16 22L26 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="support__card-title">Déposer une réclamation</h3>
            <p className="support__card-desc">
              Signalez une anomalie, une demande d'intervention ou un besoin de support technique. Votre demande est tracée et prise en charge.
            </p>
            <ul className="support__card-list">
              <li>Formulaire guidé</li>
              <li>Accusé de réception</li>
              <li>Suivi de traitement</li>
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
            <h3 className="support__card-title">S'enregistrer / Se connecter</h3>
            <p className="support__card-desc">
              Créez votre accès ou connectez-vous à l'espace Bioplus Support pour déposer et suivre vos réclamations en toute sécurité.
            </p>
            <ul className="support__card-list">
              <li>Accès sécurisé</li>
              <li>Historique des demandes</li>
              <li>Échanges centralisés</li>
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
            Accéder au portail Support
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="support__cta-note">
            Redirection vers <strong>bioplusequipements.github.io/bioplus-support/login</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
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
              <span className="section-label">Contact</span>
              <h2 className="section-title">Parlons technique</h2>
              <p className="section-subtitle">
                Une question technique, un projet, ou souhaitez échanger sur une solution de laboratoire ?
              </p>
            </div>

            <div className="contact__details animate-on-scroll">
              <a href="tel:+21622700017" className="contact__detail">
                <span className="contact__detail-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3.5 3h3l1.5 3.5-2 1.5c1 2 2.5 3.5 4.5 4.5l1.5-2L15.5 12v3c0 .5-.5 1-1 1C8 16 2 10 2 3.5 2 3 2.5 3 3 3Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <span className="contact__detail-label">Téléphone</span>
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
                  <span className="contact__detail-label">Email</span>
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
                  <span className="contact__detail-label">Adresse</span>
                  <span className="contact__detail-value">16 Rue Salaheddine Ayoubi, Tunis</span>
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
                <h3>Message envoyé</h3>
                <p>Merci pour votre message. Je vous répondrai dans les meilleurs délais.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name">Nom *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Votre nom" />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com" />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+216 ..." />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="subject">Sujet *</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Sujet" />
                  </div>
                </div>
                <div className="contact__form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Votre message..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  Envoyer
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
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">MD<span className="footer__logo-dot">.</span></span>
            <p className="footer__tagline">
              Responsable Technique Hématologie<br />
              Bioplus Tunisie / HORIBA Medical
            </p>
          </div>
          <div className="footer__col">
            <h4>Navigation</h4>
            <a href="#expertise">Expertise</a>
            <a href="#technologies">Technologies</a>
            <a href="#realisations">Réalisations</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__col">
            <h4>Automates</h4>
            <a href="#technologies">Yumizen P8000</a>
            <a href="#technologies">Yumizen H500/H550</a>
            <a href="#technologies">Pentra 80</a>
            <a href="#technologies">Micros Range</a>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <a href="mailto:m.dababi@hotmail.com">m.dababi@hotmail.com</a>
            <a href="tel:+21622700017">+216 22 700 017</a>
            <span>Tunis, Tunisie</span>
          </div>
        </div>
        <hr className="divider" />
        <div className="footer__bottom">
          <p>© 2026 Mustapha Dababi — Portfolio d'autorité professionnelle.</p>
          <div className="footer__bottom-links">
            <a href="mailto:m.dababi@hotmail.com">Email</a>
            <a href="https://github.com/mustapha-dababi" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
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
