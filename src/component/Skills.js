import React from "react";
import html5 from "../Images/html.png";
import css from "../Images/css.png";
import react from "../Images/react.png";
import java from "../Images/java.png";
import mysql from "../Images/mysql.png";
import Node from "../Images/Node.png";
import spring from "../Images/spring.png";
import mongodb from "../Images/mongodb.png"
import angular from "../Images/angular.png"
import python from "../Images/python.png"
import javascript from "../Images/javascript.png"
import "../CssComponent/skills.css";
import aws from "../Images/aws.png"

const Skills = React.forwardRef((props, ref) => {
  const skills = [
    { img: html5, alt: "HTML" },
    { img: css, alt: "CSS" },
    { img: react, alt: "React" },
    { img: angular, alt: "angular" },
    { img: Node, alt: "Node.js" },
    { img: spring, alt: "Spring" },
    { img: mysql, alt: "MySQL" },
    { img: mongodb, alt: "MongoDB" },
    { img: java, alt: "Java" },
    { img: python, alt: "Python" },
    { img: javascript, alt: "javascript" },
    { img: aws, alt: "AWS" },
  ];

  return (
    <div className="skills-container" ref={ref}>
      <h1>Skills</h1>
      <div className="skills-grid" data-aos="fade-right">
        {skills.map((item, index) => (
          <div key={index} className="skill-item">
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
