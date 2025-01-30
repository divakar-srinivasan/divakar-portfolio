import React from "react";
import "../CssComponent/contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = React.forwardRef((props, ref) => {
  return (
    <div className="contact-container" ref={ref}>
      <h1 className="contact-title">CONTACT</h1>
      <div className="contact-cards" data-aos="zoom-in">
        <div className="contact-card">
          <a
            href="https://github.com/divakar-srinivasan/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-icon" />{" "}
            <p className="contact-text">Github</p>
            <p to className="contact-detail">
              Divakar S
            </p>
          </a>
        </div>
        <div className="contact-card">
          <a
            href="https://www.linkedin.com/in/divakar-s-98b4442b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-icon" />{" "}
            <p className="contact-text">Linkedin</p>
            <p className="contact-detail">Divakar S</p>
          </a>
        </div>

        <div className="contact-card">
          
            <FaEnvelope className="contact-icon" />{" "}
            <p className="contact-text">E-Mail</p>
            <p className="contact-detail">sdivakar2005@gmail.com</p>
          
        </div>
        <div className="contact-card">
         
            <FaPhone className="contact-icon" />{" "}
            <p className="contact-text">Phone</p>
            <p className="contact-detail">+91 7708692426</p>
          
        </div>
      </div>
    </div>
  );
});

export default Contact;
