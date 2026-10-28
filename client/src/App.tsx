import { useState } from 'react'
import './index.css'
import './App.css'

const services = [
  {
    id: '01',
    icon: '</>',
    title: 'Web Engineering',
    description:
      'Purpose-built websites and web applications that connect your brand, your users and your business.',
    tags: ['React', 'Node.js', 'TypeScript'],
  },
  {
    id: '02',
    icon: 'AI',
    title: 'AI & Automation',
    description:
      'Intelligent assistants and connected workflows designed to simplify your everyday operations.',
    tags: ['AI Assistants', 'Integrations', 'Workflows'],
  },
  {
    id: '03',
    icon: '{ }',
    title: 'Custom Software',
    description:
      'Dashboards, client portals and internal tools shaped around the way your team actually works.',
    tags: ['Dashboards', 'APIs', 'Client Portals'],
  },
]

const process = [
  {
    title: 'Discover',
    description: 'Understand your business, your users and what success looks like.',
  },
  {
    title: 'Architect',
    description: 'Define the experience, technical approach and delivery roadmap.',
  },
  {
    title: 'Build',
    description: 'Bring the vision to life through thoughtful design and engineering.',
  },
  {
    title: 'Launch',
    description: 'Test, release and plan the next stage of improvement.',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="container navbar">
          <a className="brand" href="#home" aria-label="Zynqora home">
            <span className="brand-mark" aria-hidden="true">Z</span>
            ZYNQORA<span className="brand-dot">.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>

          <nav
            id="main-navigation"
            className={`navigation ${menuOpen ? 'is-open' : ''}`}
            aria-label="Main navigation"
          >
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>Why Zynqora</a>
            <a href="#process" onClick={closeMenu}>Our process</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              Let's talk <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero">
          <div className="hero-glow" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" />
                TECHNOLOGY. INTELLIGENCE. IMPACT.
              </p>

              <h1>
                Your next chapter.<br />
                <span className="gradient-text">Engineered.</span>
              </h1>

              <p className="hero-description">
                We turn ambitious ideas into intelligent digital experiences.
                From custom software to AI automation, Zynqora builds
                technology around your next business move.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Discuss your project <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-secondary" href="#services">
                  Explore our expertise
                </a>
              </div>

              <div className="hero-notes">
                <span>Strategy-led</span>
                <span>Design-focused</span>
                <span>Business-minded</span>
              </div>
            </div>

            <div className="visual-panel">
              <div className="visual-meta">
                <span>ZYNQORA / DIGITAL CORE</span>
                <span className="accent">CONCEPT</span>
              </div>

              <div className="orbital-scene" aria-hidden="true">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="orbit orbit-three" />
                <div className="core">Z</div>
                <span className="floating-label label-one">INTELLIGENCE</span>
                <span className="floating-label label-two">ENGINEERING</span>
                <span className="orbit-point point-one" />
                <span className="orbit-point point-two" />
              </div>

              <div className="visual-meta">
                <span>IDEA → EXPERIENCE → IMPACT</span>
                <span className="accent" aria-hidden="true">✦</span>
              </div>
            </div>
          </div>
        </section>

        <div className="expertise-strip">
          <div className="container expertise-items">
            <span>WEB DEVELOPMENT</span>
            <span aria-hidden="true">✦</span>
            <span>AI AUTOMATION</span>
            <span aria-hidden="true">✦</span>
            <span>CUSTOM SOFTWARE</span>
            <span aria-hidden="true">✦</span>
            <span>DIGITAL EXPERIENCES</span>
          </div>
        </div>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">OUR EXPERTISE</p>
                <h2>Complex challenges.<br />Thoughtful solutions.</h2>
              </div>
              <p className="section-intro">
                Technical depth meets purposeful design.
                Discover what we can build together.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.id}>
                  <div className="card-top">
                    <span className="service-icon" aria-hidden="true">
                      {service.icon}
                    </span>
                    <span className="card-number">{service.id}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul className="tags" aria-label={`${service.title} capabilities`}>
                    {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>

                  <a className="text-link" href="#contact">
                    Discuss your requirements <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">THE ZYNQORA APPROACH</p>
              <h2>Beyond a website.<br />Built around your business.</h2>
            </div>

            <div className="about-copy">
              <p className="about-lead">
                Strategy, design and engineering.
                Working together from the first conversation.
              </p>
              <p>
                Every business has a different challenge. Our approach starts
                with understanding yours, defining the right direction and
                creating an experience that feels clear, useful and considered.
              </p>
              <a className="text-link" href="#process">
                Explore our process <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <p className="eyebrow">FROM AMBITION TO EXECUTION</p>
            <h2>A clear path forward.</h2>

            <div className="process-grid">
              {process.map((step, index) => (
                <article className="process-card" key={step.title}>
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-panel">
            <p className="eyebrow">LET'S BUILD SOMETHING MEANINGFUL</p>
            <h2>
              Your vision.<br />
              <span className="gradient-text">Our next challenge.</span>
            </h2>
            <p>
              A new product, a smarter workflow or a stronger digital presence.
              It starts with a clear idea of what you want to achieve.
            </p>

            <div className="contact-placeholder">
              Project inquiry form is being prepared.
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <a className="brand" href="#home">
            ZYNQORA<span className="brand-dot">.</span>
          </a>
          <p>Thoughtful design. Intelligent engineering.</p>
          <small>© {new Date().getFullYear()} Zynqora.</small>
        </div>
      </footer>
    </>
  )
}