import ProjectDirectory from '@/components/project-directory'
import repositoryData from '@/data/projects.json'

const work = [
  {
    name: 'Deca Cloud',
    initials: 'dc',
    category: 'Cloud & enterprise',
    description:
      'AI-powered CRM and cloud infrastructure for intelligent business automation.',
    url: 'https://deca.cloud/',
    className: 'deca',
  },
  {
    name: 'BrownFi',
    initials: 'bf',
    category: 'Decentralized finance',
    description:
      'Liquidity solutions at the intersection of decentralized finance and blockchain engineering.',
    url: 'https://brownfi.io/',
    className: 'brownfi',
  },
  {
    name: 'Web3Go',
    initials: 'w3',
    category: 'Data & infrastructure',
    description:
      'Data-heavy systems and infrastructure for the Web3 ecosystem.',
    url: 'https://github.com/web3go-xyz',
    className: 'web3go',
  },
  {
    name: 'Octan Network',
    initials: 'on',
    category: 'Data & infrastructure',
    description:
      'Architecture and engineering for data-intensive blockchain systems.',
    url: 'https://app.octan.network/',
    className: 'octan',
  },
  {
    name: 'CryptoBadge',
    initials: 'cb',
    category: 'Digital identity',
    description:
      'Blockchain identity solutions connecting credentials and communities.',
    url: 'https://cryptobadge.xyz/',
    className: 'cryptobadge',
  },
  {
    name: 'Canpass',
    initials: 'cp',
    category: 'Digital identity',
    description:
      'Digital identity tools and infrastructure for connected experiences.',
    url: 'https://canpass.me/about',
    className: 'canpass',
  },
]

const capabilities = [
  {
    number: '01',
    name: 'Distributed systems',
    description:
      'Resilient services, high concurrency, and the architecture that connects them.',
    tools: 'Go · Microservices · Distributed architecture',
  },
  {
    number: '02',
    name: 'Cloud infrastructure',
    description:
      'The foundations that make applications reliable, observable, and ready to scale.',
    tools: 'Kubernetes · AWS · GCP · Docker',
  },
  {
    number: '03',
    name: 'AI & trading',
    description:
      'Agents, LLM orchestration, and algorithmic strategies that turn data into decisions.',
    tools: 'Python · LangChain · Freqtrade · HFT',
  },
]

export default function Home() {
  const projectCount = repositoryData.projects.filter(
    (project) => !project.fork,
  ).length
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header container">
        <a className="wordmark" href="#" aria-label="Truong Ma Phi, home">
          <span className="brand-mark" aria-hidden="true">
            t.
          </span>
          <span>Truong Ma Phi</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
        </nav>
        <a className="header-contact" href="mailto:me@trmaphi.work">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" /> Distributed
              systems engineer
            </p>
            <h1 id="hero-title">
              Systems that scale.
              <br />
              <span>Ideas that ship.</span>
            </h1>
            <p className="hero-intro">
              Hey, I’m <strong>Truong Ma Phi.</strong> I build resilient,
              high-performance systems across cloud infrastructure, AI, and
              trading.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="https://github.com/trmaphi">
                Find me on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" aria-hidden="true" />
              <p>From the first idea to the infrastructure behind it.</p>
            </div>
          </div>
          <div className="system-art" aria-hidden="true">
            <div className="art-topline">
              <span>BUILDING CONNECTIONS</span>
              <span>FIG. 01</span>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="connection connection-a" />
            <div className="connection connection-b" />
            <div className="connection connection-c" />
            <div className="system-core">
              <span className="core-symbol">
                t<span>.</span>
              </span>
              <span>IDEA → SYSTEM</span>
            </div>
            <div className="system-node node-cloud">
              <span className="node-icon">⌘</span>
              <span>Cloud</span>
            </div>
            <div className="system-node node-ai">
              <span className="node-icon">✳</span>
              <span>Intelligence</span>
            </div>
            <div className="system-node node-trading">
              <span className="node-icon">↗</span>
              <span>Trading</span>
            </div>
            <span className="orbit-point point-one" />
            <span className="orbit-point point-two" />
            <span className="orbit-point point-three" />
            <div className="art-caption">
              <span className="status-dot" />
              <span>Complexity, connected.</span>
              <span>∞</span>
            </div>
          </div>
        </section>
        <div className="expertise-strip">
          <div className="container">
            <span>Working at the intersection of</span>
            <p>
              Distributed systems <i>·</i> Cloud infrastructure <i>·</i>{' '}
              Artificial intelligence <i>·</i> Trading
            </p>
          </div>
        </div>
        <section
          className="section about-section container"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-marker">
            <span>01 / About</span>
            <span className="section-rule" />
          </div>
          <div className="about-layout">
            <h2 id="about-title">
              A builder at heart.
              <br />
              <span>An engineer by craft.</span>
            </h2>
            <div className="about-copy">
              <p>
                I work where application-layer microservices, cloud-native
                infrastructure, and AI meet. My focus is building systems that
                stay fast and dependable as the problems get bigger.
              </p>
              <p>
                My work spans enterprise cloud platforms, decentralized finance,
                digital identity, and data-heavy infrastructure. Lately, I’m
                exploring how LLMs can support algorithmic strategy development
                and trading automation.
              </p>
              <a className="text-link" href="mailto:me@trmaphi.work">
                Have an interesting problem? Let’s connect{' '}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="capabilities">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.name}>
                <span className="capability-number">{capability.number}</span>
                <h3>{capability.name}</h3>
                <p>{capability.description}</p>
                <span className="capability-tools">{capability.tools}</span>
              </article>
            ))}
          </div>
        </section>
        <section
          className="work-section"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="container section">
            <div className="section-marker">
              <span>02 / Selected work</span>
              <span className="section-rule" />
            </div>
            <div className="section-heading">
              <h2 id="work-title">
                A few things I’ve
                <br />
                <span>helped bring to life.</span>
              </h2>
              <p>
                Platforms and products I’ve contributed to across cloud, AI,
                data, and Web3.
              </p>
            </div>
            <div className="work-grid">
              {work.map((project, index) => (
                <a
                  className={`work-card ${index < 2 ? 'work-card-featured' : ''}`}
                  href={project.url}
                  key={project.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="work-card-top">
                    <span
                      className={`project-monogram ${project.className}`}
                      aria-hidden="true"
                    >
                      {project.initials}
                    </span>
                    <span className="work-category">{project.category}</span>
                    <span className="work-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span className="work-card-link">
                    Explore project <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section
          className="section projects-section container"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-marker">
            <span>03 / Open source & experiments</span>
            <span className="section-rule" />
          </div>
          <div className="section-heading">
            <h2 id="projects-title">
              Built, explored,
              <br />
              <span>and shared.</span>
            </h2>
            <p>
              {projectCount} public project repositories, plus the open-source
              forks I keep close. A look at what I’m building and exploring.
            </p>
          </div>
          <ProjectDirectory projects={repositoryData.projects} />
          <div className="directory-footer">
            <span>
              Public GitHub repositories · Updated{' '}
              {new Intl.DateTimeFormat('en', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                timeZone: 'UTC',
              }).format(new Date(repositoryData.updatedAt))}
            </span>
            <a
              className="text-link"
              href="https://github.com/trmaphi?tab=repositories"
            >
              View GitHub profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section
          className="contact-section container"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-card">
            <div>
              <p className="eyebrow">Have something in mind?</p>
              <h2 id="contact-title">
                Good things start
                <br />
                with a conversation<span>.</span>
              </h2>
              <p>Systems, ideas, or something we haven’t thought of yet.</p>
            </div>
            <a className="button button-light" href="mailto:me@trmaphi.work">
              Say hello <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <a className="wordmark" href="#">
          <span className="brand-mark" aria-hidden="true">
            t.
          </span>
          <span>Truong Ma Phi</span>
        </a>
        <span>Engineering, with intention.</span>
        <div>
          <a href="https://github.com/trmaphi">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href="https://x.com/trmaphi">
            X / Twitter <span aria-hidden="true">↗</span>
          </a>
          <a href="mailto:me@trmaphi.work">
            Email <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </>
  )
}
