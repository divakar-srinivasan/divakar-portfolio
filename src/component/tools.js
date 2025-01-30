import React from "react";
import git from "../Images/tools/git.png";
import aws from "../Images/tools/aws.png";
import Kubernetes from "../Images/tools/net.png";
import postman from "../Images/tools/post.png";
import ide from "../Images/tools/ide.png";
import vscode from "../Images/tools/vs.png";
import figma from "../Images/tools/fig.png";
import spring from "../Images/tools/spring.png";
import jira from "../Images/tools/jira.png";
import jenkins from "../Images/tools/jenkins.png";
import docker from "../Images/tools/docker.png";
import ansible from "../Images/tools/ansible.png";
import "../CssComponent/tool.css";

const Tools = React.forwardRef((props, ref) => {
  const tools = [
    { img: vscode, alt: "VS Code", name: "VS Code" },
    { img: ide, alt: "Spring Tool Suite", name: "Spring Tool Suite" },
    { img: postman, alt: "Postman", name: "Postman" },
    { img: spring, alt: "Spring", name: "Spring" },
    { img: figma, alt: "Figma", name: "Figma" },
    { img: jira, alt: "Jira", name: "Jira" },
    { img: aws, alt: "AWS", name: "AWS" },
    { img: git, alt: "Git", name: "Git" },
    { img: jenkins, alt: "Jenkins", name: "Jenkins" },
    { img: docker, alt: "Docker", name: "Docker" },
    { img: Kubernetes, alt: "Kubernetes", name: "Kubernetes" },
    { img: ansible, alt: "Ansible", name: "Ansible" },
  ];

  return (
    <div className="tools-container" ref={ref}>
      <h1>Tools</h1>
      <div className="tools-grid" data-aos="flip-up">
        {tools.map((item, index) => (
          <div key={index} className="tool-item">
            <img src={item.img} alt={item.alt} />
            <p>{item.name}</p> {/* Add the name below the image */}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Tools;
