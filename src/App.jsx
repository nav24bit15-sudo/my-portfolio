
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home */}
      <section id="home" className="home">
        <div className="home-content">
          <h3>Hello, I'm</h3>
          <h1>Your Name</h1>
          <h2>Frontend Developer</h2>
          <p>
            I create beautiful and responsive websites
            using modern web technologies.
          </p>
          <a href="#contact" className="btn">Hire Me</a>
        </div>
        <div className="profile">
          <img
            src="https://placehold.co/300x300/1e293b/ffffff?text=Your+Photo"
            alt="Profile"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer interested in
          creating user-friendly and attractive websites.
          I enjoy learning new technologies and improving
          my coding skills.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>My Skills</h2>
        <div className="skills">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React JS</div>
          <div>Bootstrap</div>
          <div>Git & GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal responsive portfolio website.</p>
          </div>

          <div className="project-card">
            <h3>Weather App</h3>
            <p>A weather application using an API.</p>
          </div>

          <div className="project-card">
            <h3>Recipe Finder</h3>
            <p>A recipe search application using React.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for contacting me!");
        }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Your Name | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
