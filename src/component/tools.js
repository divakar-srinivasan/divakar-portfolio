import React from "react";
import git from "../Images/tools/git.png";
import aws from "../Images/tools/aws.png";
import netlify from "../Images/tools/net.png";
import postman from "../Images/tools/post.png";
import ide from "../Images/tools/ide.png";
import vscode from "../Images/tools/vs.png";
import figma from "../Images/tools/fig.png";
import spring from "../Images/tools/spring.png";
import "../CssComponent/tool.css";

const Tools = React.forwardRef((props,ref) => {
  const tools = [
    {img: git,alt: "Git",},
    {img: aws,alt: "AWS",},
    {img: netlify,alt: "Netlify",},
    {img: postman,alt: "Postman",},
    {img: spring,alt: "spring",},
    {img: ide,alt: "Spring Tool Suite",},
    {img: vscode,alt: "VS Code",},
    {img: figma,alt: "Figma",},
  ];

  return (
    <div className="tools-container" ref={ref}>
      <h1>Tools</h1>
      <div className="tools-grid"  data-aos="flip-up">
        {tools.map((item, index) => (
          <div key={index} className="tool-item">
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Tools;
