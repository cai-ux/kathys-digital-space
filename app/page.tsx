"use client";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home"><span className="brand-paw">🐾</span> Kathy</a>
        <div className="nav-links">
          {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-copy">
          <span className="eyebrow">✨ Programmer in progress</span>
          <h1>Meoww, I&apos;m <span>Kathy!</span> 🐱</h1>
          <p className="hero-text">
            I&apos;m a college student learning in the field of technology. I&apos;m passionate
            about programming, designing, and exploring new technologies.
          </p>
          <p className="hero-text">
            I enjoy learning how websites and systems work and discovering new ways to solve
            problems through technology. As I continue my journey in Information Technology,
            I aim to improve my coding skills, gain more experience, and create useful projects.
          </p>
          <div className="hero-buttons">
            <a className="button primary" href="#projects">See My Projects →</a>
            <a className="button secondary" href="#contact">Say Hello 💛</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="cat-face">ฅ^•ﻌ•^ฅ</div>
          <div className="code-window">
            <div className="dots"><i></i><i></i><i></i></div>
            <code><span>const</span> kathy = {"{"}<br/>  <b>passion:</b> &quot;tech&quot;,<br/>  <b>goal:</b> &quot;keep learning&quot; 💛<br/>{"}"};</code>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <span className="section-number">01</span>
          <div><p className="mini-title">A little about me</p><h2>About Me</h2></div>
        </div>
        <div className="about-grid">
          <div className="about-note">
            <div className="tape"></div>
            <p>I am Kathy, an Information Technology student who enjoys creativity, technology, and learning new things.</p>
            <p>I like exploring ideas, designing, and finding solutions to problems. I believe that every challenge is an opportunity to grow and improve.</p>
            <p>My goal is to continue developing my skills and become a better programmer in the future.</p>
          </div>
          <div className="fact-cards">
            <div className="fact"><span>💻</span><div><b>Creative</b><small>I enjoy designing and creating ideas.</small></div></div>
            <div className="fact"><span>🌱</span><div><b>Learning</b><small>Always curious about new technology.</small></div></div>
            <div className="fact"><span>🧩</span><div><b>Problem Solver</b><small>I like finding simple solutions.</small></div></div>
          </div>
        </div>
      </section>

      <section id="education" className="section soft">
        <div className="section-heading">
          <span className="section-number">02</span>
          <div><p className="mini-title">Where I am learning</p><h2>My College Journey</h2></div>
        </div>
        <div className="education-card">
          <div className="school-icon">🎓</div>
          <div>
            <span className="tag">CURRENTLY STUDYING</span>
            <h3>Nueva Vizcaya State University</h3>
            <h4>Bachelor of Science in Information Technology</h4>
            <p className="major">Major in <strong>Network Design Management (NDM)</strong></p>
            <p>As a 3rd-year college student, I am developing my knowledge and skills in programming, networking, system development, and other areas of Information Technology.</p>
            <p>I continue to learn new technologies, improve my problem-solving skills, and apply what I learn through school activities and projects.</p>
          </div>
          <div className="year-badge">3rd<br/><span>Year</span></div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <span className="section-number">03</span>
          <div><p className="mini-title">Things I&apos;m building</p><h2>My Projects</h2></div>
        </div>
        <div className="project-card">
          <div className="project-top"><span className="project-icon">💡</span><span className="status">● IN PROGRESS</span></div>
          <h3>System Development</h3>
          <p>I am currently working on developing a system as part of my learning journey in Information Technology.</p>
          <p>This project allows me to practice programming, improve my problem-solving skills, and understand the process of creating a functional system. It is still in progress, and I am continuously working to improve its features and functionality.</p>
          <div className="tech-pills"><span>Programming</span><span>UI Design</span><span>Problem Solving</span><span>System Development</span></div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <div className="contact-copy">
            <span className="eyebrow">Let&apos;s connect 💛</span>
            <h2>Get in Touch</h2>
            <p>Feel free to contact me for questions, collaborations, or opportunities. I am always open to learning new things, sharing ideas, and connecting with others in the field of technology.</p>
          </div>
          <div className="contact-list">
            <a href="mailto:kathysison34@gmail.com"><span>✉️</span><div><small>Gmail</small><b>kathysison34@gmail.com</b></div></a>
            <a href="tel:0602285736"><span>📱</span><div><small>Phone Number</small><b>0602285736</b></div></a>
            <a href="https://instagram.com/kixxc.oo" target="_blank" rel="noreferrer"><span>📸</span><div><small>Instagram</small><b>@kixxc.oo</b></div></a>
          </div>
        </div>
      </section>

      <footer><span>Made with 💛 and a little meow by Kathy</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}