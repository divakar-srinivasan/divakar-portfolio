import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import html5 from "../Images/skills/html.png";
import css from "../Images/skills/css.png";
import react from "../Images/skills/react.png";
import java from "../Images/skills/java.png";
import mysql from "../Images/skills/mysql.png";
import Node from "../Images/skills/Node.png";
import spring from "../Images/skills/spring.png";
import mongodb from "../Images/skills/mongodb.png";
import angular from "../Images/skills/angular.png";
import python from "../Images/skills/python.png";
import javascript from "../Images/skills/javascript.png";
import aws from "../Images/skills/aws.png";
import "../CssComponent/skills.css";

const Skills = React.forwardRef((props, ref) => {
  const skillsRef = useRef([]);

  useEffect(() => {
    skillsRef.current.forEach((el, index) => {
      gsap.to(el, {
        y: "+=15",
        repeat: -1,
        yoyo: true,
        duration: 1.5 + index * 0.2,
        ease: "sine.inOut",
      });
    });
  }, []);

  const skills = [
    { img: html5, alt: "HTML", name: "HTML" },
    { img: css, alt: "CSS", name: "CSS" },
    { img: react, alt: "React", name: "React" },
    { img: angular, alt: "Angular", name: "Angular" },
    { img: Node, alt: "Node.js", name: "Node.js" },
    { img: spring, alt: "Spring", name: "Spring" },
    { img: mysql, alt: "MySQL", name: "MySQL" },
    { img: mongodb, alt: "MongoDB", name: "MongoDB" },
    { img: java, alt: "Java", name: "Java" },
    { img: python, alt: "Python", name: "Python" },
    { img: javascript, alt: "JavaScript", name: "JavaScript" },
    { img: aws, alt: "AWS", name: "AWS" },
  ];

  return (
    <div className="skills-container" ref={ref}>
      <h1 className="header">Skills</h1>
      <div className="skills-grid" data-aos="fade-right">
        {skills.map((item, index) => (
          <div
            key={index}
            className="skill-item"
            ref={(el) => (skillsRef.current[index] = el)}
          >
            <img src={item.img} alt={item.alt} className="floating" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;