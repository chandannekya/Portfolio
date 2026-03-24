const skills = {
  Languages: ["JavaScript", "TypeScript", "Ruby", "Java", "Python", "C"],
  Frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "Ruby on Rails", "GraphQL", "REST APIs", "Socket.IO"],
  "Databases & DevOps": ["MongoDB", "PostgreSQL", "Redis", "Docker", "Kafka", "CI/CD"],
  "AI / ML": ["LangChain", "ChromaDB", "Gemini AI", "LLM Integration", "Vector DBs"],
};

export default function HomePage() {
  return (
    <>
      <header className="nav">
        <div className="nav-logo">C<span>.</span>Nekya</div>
        <nav>
          <a href="#experience">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="mailto:chandannekya@gmail.com" className="btn btn-primary">Hire Me →</a>
      </header>

      <main className="container">
        <section className="hero card">
          <p className="label">// Full-Stack Engineer</p>
          <h1>CHANDAN <span>NEKYA</span></h1>
          <p>
            Building scalable systems and elegant interfaces — from microservices to AI agents.
            Based in Lucknow, India.
          </p>
          <div className="hero-actions">
            <a href="https://chandannekya.vercel.app" target="_blank" rel="noreferrer" className="btn btn-primary">View Portfolio ↗</a>
            <a href="https://github.com/chandannekya" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub ↗</a>
          </div>
        </section>

        <section className="status card"><span className="dot" />Open to Work — Internship & Full-time</section>

        <section id="skills" className="skills card">
          <h2>// Tech Stack</h2>
          {Object.entries(skills).map(([group, list]) => (
            <div key={group}>
              <h3>{group}</h3>
              <div className="chips">{list.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </section>

        <section id="experience" className="experience card">
          <h2>// Work Experience</h2>
          <article>
            <h3>Full-Stack Product Engineering Intern</h3>
            <p className="meta">NexPanda Lab LLP · June 2025 — Nov 2025</p>
            <ul>
              <li>Built and shipped core features for a custom embedded Shopify app used by 1000+ stores.</li>
              <li>Designed dynamic product option engines reducing merchant configuration time by 40%.</li>
              <li>Engineered automated store validation and blocking system with CSP fixes.</li>
            </ul>
          </article>
          <article>
            <h3>Full Stack Developer Intern</h3>
            <p className="meta">Softricity Pvt Ltd · Jan 2025 — Mar 2025</p>
            <ul>
              <li>Designed RESTful APIs handling 10k+ daily requests, reducing response time by 35%.</li>
              <li>Architected Kafka-driven microservices across 5+ independent services.</li>
              <li>Integrated Redis caching and Docker-based CI/CD to improve delivery speed and latency.</li>
            </ul>
          </article>
        </section>

        <section id="projects" className="projects card">
          <h2>// Featured Projects</h2>
          <article>
            <h3>AutonomiX</h3>
            <p>A full-stack no-code platform to create and deploy autonomous AI agents with vector memory and streaming execution.</p>
          </article>
          <article>
            <h3>Wagging Wonders</h3>
            <p>Microservices-based pet adoption and communication platform with Kafka workflows and Socket.IO chat.</p>
          </article>
        </section>

        <section id="contact" className="contact card">
          <p className="label">// Get in Touch</p>
          <a href="mailto:chandannekya@gmail.com">chandannekya@gmail.com</a>
          <p>+91 7900792164</p>
        </section>
      </main>
    </>
  );
}
