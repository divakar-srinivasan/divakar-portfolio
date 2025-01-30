import "../CssComponent/projects.css";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bec from "../Images/project-img/bec.png";
import drcare from "../Images/project-img/drcare.png";
import eventix from "../Images/project-img/eventix.png"
import ecom from "../Images/project-img/ecom.png"
import fitcheck from "../Images/project-img/fitcheck.png"
import "aos/dist/aos.css";
const projects = [
  {
    title: "E-commerce Application (MEVN)",
    date: "Dec 2024 - Jan 2025",
    description:
      "Developed a dynamic platform that facilitates seamless online product browsing and purchasing with an intuitive user interface.",
    githubLink: "https://github.com/divakar-srinivasan/Vue-Ecommerce-fullstack",
    imgUrl: ecom,
  },
  {
    title: "Fit-Check: Fitness Tracking System (MERN)",
    date: "Sep 2024 - Nov 2024",
    description:
      "Designed a fitness tracking platform to monitor, analyze, and manage users' health metrics and fitness progress efficiently.",
    githubLink: "https://github.com/divakar-srinivasan/FitCheck-MERN-stack",
    imgUrl: fitcheck,
  },
  {
    title: "Eventix - Event Booking System (MERN)",
    date: "Jul 2024 - Sep 2024",
    description:
      "Developed a platform that simplifies event discovery and registration, providing a streamlined booking experience for users in college.",
    githubLink: "https://github.com/divakar-srinivasan/React-Eventix-fullstack",
    imgUrl: eventix,
  },
  {
    title: "Dr.Care - Online Doctor Appointment Booking System (MEAN)",
    date: "Apr 2024 - Jun 2024",
    description:
      "Built an online system enabling patients to book doctor appointments efficiently, ensuring convenience and accessibility.",
    githubLink: "https://github.com/divakar-srinivasan/Angular-Dr.Care-fullstack",
    imgUrl: drcare,
  },
  {
    title: "Freelancer - TalentCraft",
    date: "Feb 2024 - Apr 2024",
    description:
      "An innovative platform empowering skilled professionals to connect, collaborate, and create opportunities across the globe.",
    githubLink: "https://github.com/divakar-srinivasan/Freelancing-React-Project",
    imgUrl: bec,
  },
];

const Project = React.forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex > 0 ? currentIndex - 1 : projects.length - 3;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex < projects.length - 3 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
  };

  return (
    <div className="project-container" ref={ref}>
      <h1 className="neon">Projects</h1>
      <div className="carousel-container" data-aos="zoom-in">
        <button className="arrow left-arrow" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <di v className="carousel">
          {projects
            .slice(currentIndex, currentIndex + 3)
            .map((project, index) => (
              <div key={index} className="card">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${project.imgUrl})` }}
                ></div>
                <div className="card-content">
                  <h2>{project.title}</h2>
                  <p className="date">{project.date}</p>
                  <p>{project.description}</p>
                  <div className="button-group">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <button className="open-button">View Code</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </di>
        <button className="arrow right-arrow" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
});
export default Project;