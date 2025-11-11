"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import "./page.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

const projects = [
  {
    title: "Nebula Analytics",
    description:
      "A real-time insight hub for SaaS founders featuring predictive dashboards and an adaptive design system.",
    link: "https://example.com",
    stack: ["React", "Next.js", "Supabase"]
  },
  {
    title: "Horizon Studio",
    description:
      "A boutique agency site blending immersive storytelling, micro-interactions, and dynamic case studies.",
    link: "https://example.com",
    stack: ["Framer Motion", "Three.js", "Vercel"]
  },
  {
    title: "Pulse Mobile",
    description:
      "A wellbeing app with guided sessions, streak mechanics, and a bespoke component library for scale.",
    link: "https://example.com",
    stack: ["Expo", "TypeScript", "Figma"]
  }
];

const principles = [
  {
    title: "Design with Intent",
    copy:
      "Every component has a purpose. I craft interactions that guide users gently while reinforcing brand voice."
  },
  {
    title: "Ship Thoughtfully",
    copy:
      "Accessibility, performance, and maintainability are non-negotiable. Pixel-perfect details meet robust code."
  },
  {
    title: "Evolve Rapidly",
    copy:
      "Tight feedback loops keep releases lean. I work iteratively to validate concepts and measure impact."
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="page">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <header className="hero" id="top">
        <nav className="nav">
          <motion.span
            className="nav-logo"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            ueno-esque
          </motion.span>

          <div className="nav-links">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="nav-link"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </nav>

        <div className="hero-grid">
          <motion.div
            className="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="tagline">Digital product designer & engineer</span>
            <h1>
              I design and build bold web experiences that feel effortless and leave a lasting impression.
            </h1>
            <p>
              Blending design systems, creative direction, and production-ready code to ship immersive, high-performing
              products for forward-thinking teams.
            </p>

            <div className="hero-actions">
              <Link href="#work" className="primary-button">
                View selected work
              </Link>
              <Link href="#contact" className="secondary-button">
                Let’s collaborate
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="hero-card__eyebrow">Currently shaping</span>
            <h2>Creative platforms that delight.</h2>
            <p>
              Focused on advanced UI exploration, micro-interactions, and scalable design systems across the entire
              product lifecycle.
            </p>
            <div className="status-list">
              <div>
                <span>Role</span>
                <strong>Lead Product Designer · Frontend Engineer</strong>
              </div>
              <div>
                <span>Timezone</span>
                <strong>UTC — available globally</strong>
              </div>
              <div>
                <span>Availability</span>
                <strong>New engagements from June 2024</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <motion.h2
            className="section-title"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            Building digital stories through detail.
          </motion.h2>
          <motion.p
            className="section-lead"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={1}
          >
            Over the last seven years, I&apos;ve partnered with startups, scaleups, and creative studios to craft
            compelling product narratives. From early discovery to production launch, I join teams to find clarity,
            design the essence, and ship experiences that resonate.
          </motion.p>
          <motion.div
            className="principles"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {principles.map((principle, index) => (
              <motion.div className="principle-card" variants={fadeIn} custom={index} key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="work" className="section">
          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, amount: 0.6 }}
          >
            <h2>Selected Work</h2>
            <p>Explorations that blend strategy, craft, and purposeful motion.</p>
          </motion.div>

          <div className="projects">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <div className="project-card__inner">
                  <span className="project-index">0{index + 1}</span>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="stack">
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 6 }}
                    className="project-link"
                  >
                    Visit case study →
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="process" className="section process-section">
          <motion.div
            className="process-shell"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="process-header">
              <h2>Process</h2>
              <p>High-touch collaboration dotted with smart automation to move fast without sacrificing craft.</p>
            </div>
            <div className="process-grid">
              {["Discover", "Design", "Develop", "Launch"].map((phase, index) => (
                <motion.div className="process-card" variants={fadeIn} custom={index} key={phase}>
                  <span>{phase}</span>
                  <p>
                    {phase === "Discover" &&
                      "Alignment sessions, research sprints, and tonal explorations to reveal the right problems."}
                    {phase === "Design" &&
                      "Systems-driven UI, motion studies, and prototypes that translate strategy to sensory moments."}
                    {phase === "Develop" &&
                      "Production-ready builds with clean component architecture, testing, and performance budgets."}
                    {phase === "Launch" &&
                      "Roll-outs, documentation, and iteration cycles backed by analytics to keep momentum strong."}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="section contact-section">
          <motion.div
            className="contact-card"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2>Let&apos;s build something remarkable.</h2>
            <p>
              I collaborate with teams worldwide to craft ambitious interfaces that feel human, warm, and alive. Share
              your next idea—let&apos;s turn it into an experience worth remembering.
            </p>
            <div className="contact-actions">
              <a className="primary-button" href="mailto:hello@minimalmotion.studio">
                Start a conversation
              </a>
              <a
                className="secondary-button"
                href="https://cal.com/"
                target="_blank"
                rel="noreferrer"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <motion.div
          className="footer-inner"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span>© {new Date().getFullYear()} Minimal Motion Studio</span>
          <div className="footer-links">
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">
              Dribbble
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">
              Behance
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
