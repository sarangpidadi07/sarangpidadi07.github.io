import LineIcon from "@/components/LineIcon";
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

const technologies = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3", "SPFx"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "REST APIs", "Laravel", "Microsoft Graph API"],
  },
  {
    group: "Data & Security",
    items: ["PostgreSQL", "MySQL", "Supabase", "SQL Migrations", "RLS"],
  },
  {
    group: "Microsoft & Platforms",
    items: ["Entra ID", "SharePoint Online", "Power Automate", "Coveo Cloud", "Vercel"],
  },
  {
    group: "Engineering",
    items: ["Git", "GitHub", "GitLab", "CI/CD", "Jest", "Enzyme"],
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Full-Stack Software Engineer</p>
            <h1 id="hero-title">
              Sarang <span>Pidadi</span>
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
            <div className="hero-stack" aria-label="Primary technology stack">
              <span>TypeScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>Supabase</span>
            </div>
          </div>

          <div
            className="system-visual"
            role="img"
            aria-label="Animated software build system showing an idea becoming architecture, interfaces, APIs, data, security, and a shipped product"
          >
            <div className="system-visual-header">
              <span>Software build system</span>
              <span className="system-status">
                <i aria-hidden="true" />
                iterating
              </span>
            </div>

            <div className="system-canvas">
              <svg
                className="system-lines"
                viewBox="0 0 520 420"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M260 208 L132 92" />
                <path d="M260 208 L388 92" />
                <path d="M260 208 L92 218" />
                <path d="M260 208 L428 218" />
                <path d="M260 208 L142 336" />
                <path d="M260 208 L378 336" />
              </svg>

              <div className="system-core">
                <span className="system-core-icon">
                  <LineIcon name="idea" size={22} />
                </span>
                <strong>Product idea</strong>
                <small>turn intent into a system</small>
              </div>

              <div className="system-node node-architecture">
                <LineIcon name="architecture" size={18} />
                <span>Architecture</span>
              </div>
              <div className="system-node node-interface">
                <LineIcon name="code" size={18} />
                <span>Interface</span>
              </div>
              <div className="system-node node-api">
                <LineIcon name="code" size={18} />
                <span>APIs</span>
              </div>
              <div className="system-node node-data">
                <LineIcon name="architecture" size={18} />
                <span>Data</span>
              </div>
              <div className="system-node node-security">
                <LineIcon name="shield" size={18} />
                <span>Security</span>
              </div>
              <div className="system-node node-ship">
                <LineIcon name="scale" size={18} />
                <span>Ship & scale</span>
              </div>

              <span className="system-pulse pulse-a" aria-hidden="true" />
              <span className="system-pulse pulse-b" aria-hidden="true" />
              <span className="system-pulse pulse-c" aria-hidden="true" />
            </div>

            <div className="system-visual-footer">
              <span>01 invent</span>
              <span>02 engineer</span>
              <span>03 improve</span>
            </div>
          </div>
        </section>

        <Reveal>
          <section id="about" className="section shell about-section">
            <div>
              <p className="section-kicker">About</p>
              <h2>Engineering products from idea to implementation.</h2>
            </div>
            <div className="about-copy">
              <p>
                I&apos;m an India-based software engineer focused on building
                modern web applications and software products that are useful,
                maintainable, and designed to scale.
              </p>
              <p>
                My work spans system architecture, database design, APIs,
                authentication, user interfaces, enterprise integrations, and
                developer workflows. I prefer simple solutions, clear
                boundaries, and technology choices that serve the product.
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
                <h3>Astrybit</h3>
                <p className="timeline-role">
                  Independent Software Engineer (Full Stack)
                </p>
                <p>
                  Architecting and building a multi-tenant business management
                  platform with Next.js, React, TypeScript, Supabase/PostgreSQL,
                  and end-to-end ownership across application architecture,
                  data, security, and product workflows.
                </p>
              </article>

              <article className="timeline-item">
                <h3>Dell Technologies</h3>
                <p className="timeline-role">Software Engineer 1</p>
                <p>
                  Worked on Inside Dell, including React/SPFx experiences,
                  Microsoft Entra ID and Graph integrations, persistent
                  navigation, supporting microservices, enterprise search with
                  Coveo Cloud, and internal automation.
                </p>
              </article>

              <article className="timeline-item">
                <h3>Vebsigns</h3>
                <p className="timeline-role">Software Developer / Intern</p>
                <p>
                  Progressed from intern to developer while building Laravel and
                  MySQL REST APIs, admin panels, payment and transaction
                  workflows, and backend services consumed by mobile apps.
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
                <li key={step.title}>
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

            <div className="technology-grid">
              {technologies.map((technology, index) => (
                <article key={technology.group}>
                  <div className="technology-title">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{technology.group}</h3>
                  </div>
                  <ul>
                    {technology.items.map((item) => (
                      <li key={item}>
                        <span className="tech-prompt" aria-hidden="true">
                          &gt;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
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
              <p className="section-kicker">Certification</p>
              <h2>Professional Certifications</h2>
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
              <h2>Let&apos;s build something useful.</h2>
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
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
