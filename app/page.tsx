import Image from "next/image";
import { portfolio as p } from "@/data/portfolio";
import { InkArrow, ProjectSketch } from "@/components/ink";
import { SectionHeading } from "@/components/section-heading";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-shell">
          <a className="wordmark" href="#top" aria-label={`${p.name}, home`}>
            vyshnav<span>.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact">
              Let’s talk <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
      <main id="main" className="page-shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">{p.role}</p>
            <h1 id="hero-title">
              Thoughtful code.
              <br />
              <span className="ink-word">
                Human experiences.
                <svg
                  viewBox="0 0 460 18"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M3 12Q198 0 452 7M28 17Q228 8 422 12" />
                </svg>
              </span>
            </h1>
            <p className="hero-intro">
              I’m <strong>{p.name}</strong>, a full-stack developer with a
              frontend-first approach. I turn complex product requirements into
              fast, intuitive web experiences, supported by hands-on work across
              APIs, databases, payments and production infrastructure.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="/Vyshnav-P-Resume.docx" download>
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-links" aria-label="Professional links">
              <a href={`mailto:${p.email}`}>Email</a>
              {p.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <div className="location">
              <span className="location-dot" />
              Based in {p.location}
            </div>
          </div>
          <figure className="portrait-composition">
            <div className="portrait-wrap">
              <Image
                src="/portrait-transparent.webp"
                alt="Blue pen-and-ink portrait of Vyshnav P, smiling"
                width={1000}
                height={1000}
                preload
                sizes="(max-width: 600px) 85vw, (max-width: 900px) 45vw, 480px"
              />
            </div>
            <figcaption className="portrait-caption">
              <InkArrow />
              <span className="handwritten">where logic meets a human touch</span>
            </figcaption>
            <span className="portrait-index">FIG. 01 — A WORK IN PROGRESS</span>
          </figure>
        </section>
        <div className="chapter-rule">
          <span>A little about me, and the things I build.</span>
          <a href="#about" aria-label="Continue to about">
            Scroll to explore <span aria-hidden="true">↓</span>
          </a>
        </div>
        <section id="about" className="section about-section">
          <SectionHeading
            number="01"
            label="A little context"
            title="An engineer’s mind. A maker’s care."
          />
          <div className="about-grid">
            <div className="margin-note">
              <span className="handwritten">
                Curious by nature.
                <br />
                Precise by practice.
              </span>
              <InkArrow />
              <span className="braces" aria-hidden="true">
                {"{ }"}
              </span>
            </div>
            <div className="about-copy">
              <p className="large-copy">{p.about}</p>
              <p>{p.aboutDetail}</p>
              <dl className="about-facts">
                <div>
                  <dt>Experience</dt>
                  <dd>3+ years</dd>
                </div>
                <div>
                  <dt>Core focus</dt>
                  <dd>Frontend engineering</dd>
                </div>
                <div>
                  <dt>Home base</dt>
                  <dd>{p.location}</dd>
                </div>
              </dl>
              <div className="focus-grid">
                {p.focusAreas.map((area) => (
                  <article key={area.title}>
                    <h3>{area.title}</h3>
                    <p>{area.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="work" className="section work-section">
          <SectionHeading
            number="02"
            label="Selected work"
            title="Built to be useful."
            note="four projects, many moving parts"
          />
          <div className="projects">
            {p.projects.map((project, i) => {
              const projectTarget = project.url || `#${project.id}-details`;
              const externalLinkProps = project.url
                ? { target: "_blank", rel: "noreferrer" }
                : {};

              return (
              <article className="project" key={project.id} id={project.id}>
                <div className="project-copy">
                  <p className="eyebrow project-meta">
                    0{i + 1}
                    <span> / </span>
                    {project.category}
                  </p>
                  <h3>
                    <a href={projectTarget} {...externalLinkProps}>
                      {project.name}
                      <span className="project-link-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <div className="project-detail" id={`${project.id}-details`}>
                    <span className="project-label">Overview</span>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-detail">
                    <span className="project-label">Role & contribution</span>
                    <ul>
                      {project.contributions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-detail">
                    <span className="project-label">Important features</span>
                    <ul className="feature-list">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="project-label">Technologies</span>
                  <ul className="tech-list" aria-label="Technologies">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  {project.url && (
                    <a
                      className="text-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit project ↗
                    </a>
                  )}
                </div>
                <a
                  className="project-visual-link"
                  href={projectTarget}
                  aria-label={`${project.url ? "Visit" : "Read details for"} ${project.name}`}
                  {...externalLinkProps}
                >
                  <figure className="project-visual">
                    <span className="diagram-label">
                      CONCEPT NOTES / 0{i + 1}
                    </span>
                    <ProjectSketch type={project.diagram} />
                    <figcaption className="handwritten">
                      {project.note}
                    </figcaption>
                  </figure>
                </a>
              </article>
              );
            })}
          </div>
        </section>
        <section id="experience" className="section">
          <SectionHeading
            number="03"
            label="The journey so far"
            title="Where I’ve put the work in."
          />
          <div className="experience-list">
            {p.experience.map((job, i) => (
              <article className="experience" key={job.company}>
                <div className="experience-date">
                  <span className="eyebrow">{job.date}</span>
                  {i === 0 && (
                    <span className="handwritten current-note">
                      the current chapter
                    </span>
                  )}
                </div>
                <div>
                  <p className="job-role">{job.role}</p>
                  <h3>{job.company}</h3>
                  <p className="job-location">{job.location}</p>
                  <p>{job.description}</p>
                  <p>{job.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="toolkit" className="section">
          <SectionHeading
            number="04"
            label="The toolkit"
            title="The tools behind the craft."
            note="Chosen for the problem at hand."
          />
          <div className="toolkit-grid">
            {p.skills.map((skill, i) => (
              <div className="skill" key={skill.title}>
                <span className="skill-index">0{i + 1}</span>
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.items}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="backend-note">
            <span className="handwritten">Beyond the interface ↗</span> Hands-on
            with service/repository architecture, DTO and service-layer logic,
            REST API creation, SQL, Redis, Docker, uptime aggregation, PSP
            integrations and mining services including NICEHASH and ANTPOOL.
          </p>
        </section>
        <section id="education" className="section education-section">
          <div>
            <p className="eyebrow">05 / Foundations</p>
            <h2>Always building on what I know.</h2>
          </div>
          <div className="education">
            <span className="eyebrow">{p.education.year}</span>
            <h3>{p.education.degree}</h3>
            <p>{p.education.subject}</p>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <p className="eyebrow">06 / The next conversation</p>
          <h2>
            Good things start
            <br />
            with a <em>conversation.</em>
          </h2>
          <p>
            Have an interesting problem in mind?
            <br />
            Let’s build something thoughtful.
          </p>
          {p.email ? (
            <a className="contact-email" href={`mailto:${p.email}`}>
              {p.email}
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <p className="contact-pending">
              Contact details will be added soon.
            </p>
          )}
          <div className="contact-bottom">
            <div className="social-links">
              {p.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label} ↗
                </a>
              ))}
              <a href="/Vyshnav-P-Resume.docx" download>
                Download CV ↓
              </a>
            </div>
            <span className="handwritten">
              A little ink. A lot of intention.
              <InkArrow />
            </span>
          </div>
        </section>
      </main>
      <footer className="footer page-shell">
        <span>
          © {new Date().getFullYear()} {p.name}
        </span>
        <div className="footer-links">
          <a href={`mailto:${p.email}`}>Email</a>
          {p.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
