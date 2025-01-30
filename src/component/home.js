import React from "react";
import "../CssComponent/home.css";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const Home = React.forwardRef((props, ref) => {
  return (
    <div className="home" ref={ref}>
      <div className="intro">
        <p className="intro-text">Hello, I'm</p>
        <div className="typewriter-container">
          <Typewriter
            className="ddd"
            options={{
              strings: ["Divakar S", "Full stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
<p className="details">
Ambitious Full Stack Developer with comprehensive experience in the MERN and MEAN stacks. Adept at crafting scalable, high-performance web applications, and passionate about driving innovation in team environments. Committed to enhancing user experiences through cutting-edge technologies and delivering robust, efficient solutions. Skilled in DevOps practices, ensuring seamless integration, continuous deployment, and efficient collaboration between development and operations teams.
</p>

        <div className="social-links">
          <a
            href="https://github.com/divakar-srinivasan/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/divakar-s-98b4442b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://leetcode.com/u/DIVAKAR_S/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaCode className="social-icon" />
          </a>
        </div>
      </div>
      <div className="stars">
        {Array.from({ length: 50 }).map((_, i) => (
          <div className="star" key={i}></div>
        ))}
      </div>
    </div>
  );
});

export default Home;
