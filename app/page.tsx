import EngineeringStack from "@/components/EngineeringStack";
import LineIcon from "@/components/LineIcon";
import NeuralBuildSystem from "@/components/NeuralBuildSystem";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";

const buildSteps = [
  {
    title: "Understand",
    detail: "Requirements, workflows, constraints, and what success looks like.",
    icon: "idea" as const,
  },
  {
    title: "Design",
    detail: "Architecture, data models, boundaries, and system behavior.",
    icon: "architecture" as const,
  },
  {
    title: "Build",
    detail: "Frontend, backend, APIs, integrations, and reliable workflows.",
    icon: "code" as const,
  },
  {
    title: "Secure",
    detail: "Authentication, authorization, validation, and data isolation.",
    icon: "shield" as const,
  },
  {
    title: "Refine",
    detail: "Performance, usability, maintainability, and operational quality.",
    icon: "refine" as const,
  },
  {
    title: "Scale",
    detail: "Modularity, reuse, observability, and room for long-term growth.",
    icon: "scale" as const,
  },
];

const projectFacts = [
  "Multi-tenant",
  "Modular monolith",
  "Organization + branch scope",
  "PostgreSQL RLS",
  "Next.js App Router",
  "Supabase Auth",
];


export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-intelligence">
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-signal hero-signal-left" aria-hidden="true" />
            <div className="hero-signal hero-signal-right" aria-hidden="true" />

            <div className="hero-copy">
              <p className="eyebrow">Enterprise software · SaaS products · Full-stack engineering</p>
              <h1 id="hero-title" className="hero-name">
                <span className="hero-name-first">Sarang</span>
                <span className="hero-name-last">Pidadi</span>
                <span className="hero-name-accent" aria-hidden="true" />
              </h1>
              <p className="hero-summary">
                I design and build scalable software products across frontend,
                backend, APIs, data, security, and product architecture.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore selected work
                </a>
                <a className="text-link" href="#contact">
                  Contact <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="hero-system">
              <div className="hero-system-rail" aria-hidden="true">
                <span>01 / product intent</span>
                <span className="hero-system-live"><i /> adaptive loop</span>
                <span>06 / shipped value</span>
              </div>

              <NeuralBuildSystem />

              <div className="hero-toolchain" aria-label="Primary technology stack">
                <span className="hero-toolchain-label">Execution layer</span>
                <div className="hero-stack">
                  <span>TypeScript</span>
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                  <span>Supabase</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Reveal>
          <section id="about" className="section shell about-section">
            <div>
              <p className="section-kicker">About</p>
              <h2>Useful software. Strong foundations.</h2>
            </div>
            <div className="about-copy">
              <p>
                I&apos;m a full-stack software engineer focused on scalable web
                products, enterprise applications, and SaaS. I work across
                architecture, data, APIs, security, and interfaces, with a
                preference for simple systems that stay maintainable as they grow.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="experience" className="section shell">
            <div className="section-heading-row">
              <div>
                <p className="section-kicker">Experience</p>
                <h2>Where I&apos;ve built software.</h2>
              </div>
              <p className="section-intro">
                Enterprise software, product development, and full-stack
                engineering.
              </p>
            </div>

            <div className="timeline" aria-label="Professional experience">
              <article className="timeline-item">
                <p className="experience-type">Product engineering</p>
                <h3>Astrybit</h3>
                <p className="timeline-role">Independent Product Engineering</p>
                <p>
                  Building a multi-tenant business platform with Next.js,
                  TypeScript, Supabase, and PostgreSQL, with ownership across
                  architecture, data, security, and product workflows.
                </p>
              </article>

              <article className="timeline-item timeline-item-featured">
                <p className="experience-type">Enterprise engineering</p>
                <h3>Dell Technologies</h3>
                <p className="timeline-role">Software Engineer 1</p>
                <p className="experience-context">
                  Inside Dell · Enterprise employee platform
                </p>
                <p>
                  Built and improved Inside Dell experiences across React/SPFx,
                  Microsoft Graph and Entra ID integrations, enterprise search,
                  navigation, supporting services, and automation.
                </p>
              </article>

              <article className="timeline-item">
                <p className="experience-type">Backend engineering</p>
                <h3>Vebsigns</h3>
                <p className="timeline-role">Software Developer / Intern</p>
                <p>
                  Built Laravel/MySQL REST APIs, admin workflows, payments,
                  transactions, and backend services consumed by mobile apps.
                </p>
              </article>
            </div>
          </section>
        </Reveal>

        <section className="build-section">
          <Reveal className="shell">
            <div className="build-heading">
              <div>
                <p className="section-kicker section-kicker-light">
                  How I build
                </p>
                <h2>Engineering is a connected process.</h2>
              </div>
              <p className="build-intro">
                I move from understanding the problem to designing the system,
                building the right boundaries, securing the data, and refining
                what ships.
              </p>
            </div>

            <ol className="build-flow">
              {buildSteps.map((step, index) => (
                <li
                  key={step.title}
                  className={"build-step build-step-" + (index + 1)}
                >
                  <div className="build-card-top">
                    <span className="build-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="build-icon">
                      <LineIcon name={step.icon} size={21} />
                    </span>
                  </div>
                  <strong>{step.title}</strong>
                  <p>{step.detail}</p>
                  {index < buildSteps.length - 1 && (
                    <span className="build-connector" aria-hidden="true">→</span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <Reveal>
          <section id="work" className="section shell work-section">
            <div className="project-topline">
              <div>
                <p className="pill">Selected project · 01</p>
                <h2>Astrybit</h2>
                <p className="project-subtitle">
                  An India-first, configurable business operating system for
                  single-location and multi-branch organizations.
                </p>
              </div>
              <div className="project-meta">
                <span>Next.js</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Supabase</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <div className="project-facts" aria-label="Astrybit engineering facts">
              {projectFacts.map((fact) => (
                <span key={fact}>{fact}</span>
              ))}
            </div>

            <div
              className="project-visual"
              role="img"
              aria-label="Illustrative Astrybit product interface preview"
            >
              <div className="browser-bar">
                <div className="browser-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="browser-address">astrybit / operations</span>
              </div>
              <div className="dashboard">
                <aside className="dashboard-side">
                  <div className="mock-logo">A</div>
                  <span className="mock-line is-active" />
                  <span className="mock-line" />
                  <span className="mock-line" />
                  <span className="mock-line" />
                </aside>
                <div className="dashboard-main">
                  <div className="mock-heading">
                    <span />
                    <span />
                  </div>
                  <div className="mock-grid">
                    <div className="mock-card">
                      <small>Operations</small>
                      <strong>Point of sale</strong>
                    </div>
                    <div className="mock-card">
                      <small>Inventory</small>
                      <strong>Stock control</strong>
                    </div>
                    <div className="mock-card">
                      <small>Organization</small>
                      <strong>Multi-branch</strong>
                    </div>
                  </div>
                  <div className="mock-content">
                    <div className="mock-table">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="mock-panel">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-grid">
              <article>
                <h3>Product</h3>
                <p>
                  A configurable business operating system designed to support
                  businesses from a single-owner shop through multi-branch
                  organizations without requiring a separate product or schema
                  for each business category.
                </p>
              </article>

              <article>
                <h3>Architecture</h3>
                <p>
                  Built as a modular monolith using the Next.js App Router,
                  server-first application boundaries, explicit domain services,
                  scoped repositories, Supabase Auth, and PostgreSQL with
                  versioned SQL migrations.
                </p>
              </article>

              <article>
                <h3>Tenancy & Security</h3>
                <p>
                  The organization is the tenant boundary, with branch-scoped
                  access layered underneath. Membership-derived authorization,
                  role and permission checks, composite constraints, and
                  PostgreSQL Row-Level Security enforce isolation.
                </p>
              </article>

              <article>
                <h3>Business Systems</h3>
                <p>
                  Reusable capabilities cover catalogue, customers, orders,
                  payments, inventory and purchasing, resources, sessions and
                  bookings, memberships, packages, loyalty, and configurable
                  category-driven workflows.
                </p>
              </article>
            </div>

            <div className="project-note">
              <span>01</span>
              <p>
                Astrybit is under active development. The source repository is
                private; this case study focuses on the product architecture,
                tenancy model, security boundaries, and reusable business systems.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="technology" className="section shell">
            <div className="section-heading-row technology-heading">
              <div>
                <p className="section-kicker">Engineering stack</p>
                <h2>Tools I use to build.</h2>
              </div>
              <p className="section-intro">
                A practical stack shaped by product requirements rather than
                technology for its own sake.
              </p>
            </div>

            <EngineeringStack />
          </section>
        </Reveal>

        <Reveal>
          <section className="section shell credentials">
            <div>
              <p className="section-kicker">Education</p>
              <h2>Master of Computer Applications</h2>
              <p>
                Savitribai Phule Pune University · 2021
                <br />
                Indira College of Engineering and Management, Pune
              </p>
            </div>
            <div>
              <p className="section-kicker">Certifications</p>
              <h2>Continuous learning</h2>
              <p>
                AWS Technical Essentials — Simplilearn
                <br />
                Python Bootcamp — Udemy
              </p>
            </div>
          </section>
        </Reveal>

        <section id="contact" className="contact-section">
          <Reveal className="shell contact-inner">
            <div className="contact-copy-block">
              <p className="section-kicker">Contact</p>
              <h2>
                <span>Let&apos;s build</span>
                <span>something useful.</span>
              </h2>
              <p className="contact-copy">
                Open to software engineering opportunities, product work, and
                interesting technical problems.
              </p>
            </div>

            <div className="contact-links" aria-label="Contact links">
              <a href="mailto:sarangpidadi07@gmail.com">
                <span className="contact-icon">
                  <LineIcon name="mail" size={20} />
                </span>
                <span>
                  <small>Email</small>
                  <strong>sarangpidadi07@gmail.com</strong>
                </span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sarang-pidadi-144160116/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <LineIcon name="link" size={20} />
                </span>
                <span>
                  <small>LinkedIn</small>
                  <strong>Professional profile</strong>
                </span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/sarangpidadi07"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <LineIcon name="github" size={20} />
                </span>
                <span>
                  <small>GitHub</small>
                  <strong>Code & projects</strong>
                </span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <span>© {new Date().getFullYear()} Sarang Pidadi</span>
          <span>Built with Next.js + TypeScript</span>
          <a href="#top" aria-label="Back to top">↑</a>
        </div>
      </footer>
    </>
  );
}
