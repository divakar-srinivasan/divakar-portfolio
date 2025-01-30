import React from "react";
import "../CssComponent/Foter.css";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-content">
        <h3 className="lightning">Made with DIVAKAR S</h3>
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
            href="https://leetcode.com/u/DIVAKAR_S/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-code"></i>
          </a>
        </div>
        <p>© 2025 Divakar S. All rights reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;
