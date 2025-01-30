import React from "react";
import "../CssComponent/Foter.css";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-content">
        <h3>sdivakar2005</h3>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/divakar-s-98b4442b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/divakar-srinivasan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p>© 2024 Divakar S. All rights reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;
