import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader";

const buildSteps = [
  "Understand",
  "Architecture",
  "Data & APIs",
  "Interface",
  "Build",
  "Refine",
];

const technologies = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3", "SPFx"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Supabase", "MySQL"],
  },
  {
    group: "Platforms & Tools",
    items: ["Git", "GitHub", "Docker", "AWS", "Vercel"],
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer · Full Stack · Backend</p>
            <h1 id="hero-title">
              I build <span>software systems</span> that scale from product idea
              to production.
            </h1>
            <p className="hero-summary">
              I&apos;m Sarang Pidadi, a full-stack software engineer working
              across frontend, backend, APIs, data, security, and product
              architecture.
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

          <div className="developer-console" aria-hidden="true">
            <div className="console-bar">
              <div className="console-dots">
                <span />
                <span />
                <span />
              </div>
              <span>engineer.ts</span>
            </div>
            <pre className="console-code">
              <code>
                <span className="code-muted">01</span>{" "}
                <span className="code-keyword">const</span> engineer = {"{"}
                {"\n"}
                <span className="code-muted">02</span>{"   "}name:{" "}
                <span className="code-string">&quot;Sarang Pidadi&quot;</span>,
                {"\n"}
                <span className="code-muted">03</span>{"   "}focus: [
                <span className="code-string">&quot;SaaS&quot;</span>,{" "}
                <span className="code-string">&quot;Enterprise&quot;</span>,{" "}
                <span className="code-string">&quot;Product&quot;</span>],
                {"\n"}
                <span className="code-muted">04</span>{"   "}strengths: [
                <span className="code-string">&quot;Architecture&quot;</span>,{" "}
                <span className="code-string">&quot;APIs&quot;</span>,{" "}
                <span className="code-string">&quot;Data&quot;</span>],
                {"\n"}
                <span className="code-muted">05</span>{"   "}principles: [
                <span className="code-string">&quot;secure&quot;</span>,{" "}
                <span className="code-string">&quot;maintainable&quot;</span>,{" "}
                <span className="code-string">&quot;scalable&quot;</span>],
                {"\n"}
                <span className="code-muted">06</span> {"}"};
                {"\n\n"}
                <span className="code-muted">07</span>{" "}
                <span className="code-comment">
                  // build → measure → refine
                </span>
                <span className="code-caret">▋</span>
              </code>
            </pre>
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
                <h2>Professional journey.</h2>
              </div>
              <p className="section-intro">
                Enterprise software, product development, and full-stack
                engineering.
              </p>
            </div>

            <div className="timeline" aria-label="Professional experience">
              <article className="timeline-item">
                <p className="timeline-date">Apr 2025 — Present</p>
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
                <p className="timeline-date">Dec 2021 — Mar 2025</p>
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
                <p className="timeline-date">Jan 2021 — Oct 2021</p>
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
              <p className="section-kicker section-kicker-light">
                How I build
              </p>
              <h2>From problem to product.</h2>
            </div>

            <ol className="build-flow">
              {buildSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <Reveal>
          <section id="work" className="section shell work-section">
            <div className="project-topline">
              <div>
                <p className="pill">Featured project</p>
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
                <h2>Technologies behind the systems.</h2>
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
                Savitribai Phule Pune University · 2021 · 8.3 CGPA
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
          <div className="contact-mark" aria-hidden="true">
            <span />
          </div>
          <Reveal className="shell contact-inner">
            <p className="section-kicker section-kicker-light">Contact</p>
            <h2>
              Let&apos;s talk<span>.</span>
            </h2>
            <p className="contact-copy">
              Have an opportunity, project, or interesting engineering problem?
            </p>
            <div className="contact-links">
              <a href="mailto:sarangpidadi07@gmail.com">
                Email <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sarang-pidadi-144160116/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://github.com/sarangpidadi07"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
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
