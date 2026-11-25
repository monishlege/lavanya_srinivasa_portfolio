import { FormEvent, useState } from "react";
import { portfolio } from "./data";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me about Lavanya’s education, interests, leadership, or skills." },
  ]);

  function answer(text: string) {
    const q = text.toLowerCase();
    if (/study|cse|college|degree|education/.test(q))
      return "Lavanya is pursuing a B.E. in Computer Science and Engineering at Cambridge Institute of Technology – North Campus in Bengaluru.";
    if (/ieee|photonics|leadership|vice chairman/.test(q))
      return "Lavanya is Vice Chairman of the IEEE CITNC Photonics Society Student Branch Chapter. Visit https://ieee.citnc.edu.in/photonics.";
    if (/aerospace|airspace|aviation|flight/.test(q))
      return "Lavanya is interested in aviation technology, flight telemetry, autonomous navigation, satellite communication, and embedded systems.";
    if (/car|automotive|mobility|vehicle/.test(q))
      return "Lavanya is passionate about cars and interested in vehicle dynamics, connected mobility, automotive electronics, and intelligent vehicle software.";
    if (/skill|language|technology|tool|tech/.test(q))
      return "Her programming languages are Java, C, and Python. Her web and application skills include React.js, Streamlit, Gradio, and application development.";
    if (/project|github|work/.test(q))
      return "Lavanya’s project concepts include a study planner, a flight telemetry visualizer, and a connected vehicle companion.";
    return "Lavanya can help with software, engineering leadership, aerospace, mobility, or connected technology.";
  }

  function submit(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setMessages((current) => [
      ...current,
      { from: "user", text: clean },
      { from: "bot", text: answer(clean) },
    ]);
    setQuestion("");
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    submit(question);
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span className="brand-mark">LS</span>
            <span>Lavanya Srinivasa</span>
          </a>
          <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span /><span /><span />
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#focus" onClick={closeMenu}>Focus</a>
            <a href="#leadership" onClick={closeMenu}>Leadership</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="github-link" href={portfolio.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container" id="about">
          <div className="aerospace-backdrop" aria-hidden="true">
            <div className="hud-ring hud-ring-one" />
            <div className="hud-ring hud-ring-two" />
            <div className="flight-path flight-path-one" />
            <div className="flight-path flight-path-two" />
            <span className="hud-coord hud-coord-one">BLR · 13.13° N</span>
            <span className="hud-coord hud-coord-two">ALT 00035 · M0.82</span>
            <span className="hud-coordinate-dot" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">CSE @ CITNC · IEEE PHOTONICS VICE CHAIRMAN</p>
            <h1>Computer Science at the intersection of <span>aerospace and mobility.</span></h1>
            <p className="intro">
              I’m Lavanya Srinivasa, a Computer Science and Engineering student at Cambridge Institute of Technology – North Campus in Bengaluru.
              I’m interested in aircraft systems, cars, software engineering, and building technology that solves real problems.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">Explore projects</a>
              <a className="button" href={portfolio.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="button" href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <aside className="profile-card">
            <img src="./assets/lavanya-profile.jpg" alt="Lavanya Srinivasa" />
            <div className="profile-meta">
              <strong>Lavanya Srinivasa</strong>
              <span>CSE · CITNC · Bengaluru</span>
            </div>
          </aside>
        </section>

        <section className="section container" id="focus">
          <div className="section-heading">
            <p>01 · Focus areas</p>
            <h2>What drives me</h2>
          </div>
          <div className="focus-grid">
            <article className="card">
              <span className="card-label">AEROSPACE</span>
              <h3>Airspace & aerospace systems</h3>
              <p>Interested in aviation technology, flight telemetry, satellite and ground communication, autonomous navigation, and embedded systems.</p>
              <div className="tags"><span>Flight data</span><span>Autonomy</span><span>Embedded systems</span></div>
            </article>
            <article className="card">
              <span className="card-label amber">AUTOMOTIVE</span>
              <h3>Automotive & mobility</h3>
              <p>Passionate about cars and modern mobility, including vehicle dynamics, automotive electronics, connected systems, and intelligent software.</p>
              <div className="tags"><span>Connected mobility</span><span>Vehicle systems</span><span>Cars</span></div>
            </article>
          </div>
        </section>

        <section className="section container" id="leadership">
          <div className="section-heading">
            <p>02 · Experience</p>
            <h2>Leadership & learning</h2>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-index">01</div>
              <div>
                <h3>Vice Chairman — IEEE CITNC Photonics Society Student Branch Chapter</h3>
                <p>Leading student initiatives, technical workshops, seminars, and team operations at CITNC, Bengaluru.</p>
                <a href={portfolio.ieee} target="_blank" rel="noreferrer">Visit the society ↗</a>
              </div>
            </article>
            <article>
              <div className="timeline-index">02</div>
              <div>
                <h3>Intern — Samsung Innovation Campus</h3>
                <p>Gaining hands-on technical training through collaborative learning, applied problem-solving, and practical engineering skills.</p>
              </div>
            </article>
            <article>
              <div className="timeline-index">03</div>
              <div>
                <h3>B.E. Computer Science & Engineering</h3>
                <p>Core studies in programming, data structures, operating systems, and software design at CITNC.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading">
            <p>03 · Projects</p>
            <h2>Selected concepts</h2>
          </div>
          <div className="project-grid">
            {[
              { name: "Study planner", category: "SOFTWARE", text: "A web-app concept for organizing learning goals and tracking progress.", tech: ["React.js", "JavaScript", "UI/UX"] },
              { name: "Flight telemetry visualizer", category: "AEROSPACE", text: "A dashboard concept for exploring route information and sample flight sensor data.", tech: ["JavaScript", "Data", "Visualization"] },
              { name: "Connected vehicle companion", category: "MOBILITY", text: "A mobility concept for viewing vehicle status and connected trip features.", tech: ["React.js", "Mobility", "App"] },
            ].map((project) => (
              <article className="project-card" key={project.name}>
                <span className="card-label">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.text}</p>
                <div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <a href={portfolio.github} target="_blank" rel="noreferrer">View GitHub ↗</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="skills">
          <div className="section-heading">
            <p>04 · Skills</p>
            <h2>Technical toolkit</h2>
          </div>
          <div className="skills-grid">
            <article><h3>Programming languages</h3><div className="tags"><span>Java</span><span>C</span><span>Python</span></div></article>
            <article><h3>Web & application development</h3><div className="tags"><span>React.js</span><span>Streamlit</span><span>Gradio</span><span>Application development</span></div></article>
            <article><h3>Computer science</h3><div className="tags"><span>Data structures</span><span>Operating systems</span><span>Software design</span></div></article>
            <article><h3>Leadership</h3><div className="tags"><span>Team operations</span><span>Workshops</span><span>Communication</span></div></article>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div>
            <p className="eyebrow">05 · Contact</p>
            <h2>Let’s connect.</h2>
            <p>Interested in software, aerospace, automotive technology, or a collaboration?</p>
          </div>
          <div className="actions">
            <a className="button primary" href={`mailto:${portfolio.email}`}>Send a message</a>
            <a className="button" href={portfolio.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="button" href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>Lavanya Srinivasa · Bengaluru, India</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <button className="chat-button" type="button" onClick={() => setChatOpen((value) => !value)} aria-expanded={chatOpen}>
        Ask about Lavanya
      </button>
      {chatOpen && (
        <aside className="chat-panel" aria-label="Portfolio assistant">
          <header>
            <strong>Portfolio assistant</strong>
            <button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat">×</button>
          </header>
          <div className="chat-messages" role="log" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`chat-message ${message.from}`} key={index}>{message.text}</div>
            ))}
          </div>
          <div className="chat-suggestions">
            {["What does she study?", "What are her interests?", "Tell me about her leadership"].map((item) => (
              <button type="button" key={item} onClick={() => submit(item)}>{item}</button>
            ))}
          </div>
          <form onSubmit={onSubmit}>
            <input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask a question…" aria-label="Ask a question" />
            <button type="submit" aria-label="Send">↗</button>
          </form>
        </aside>
      )}
    </>
  );
}

export default App;
