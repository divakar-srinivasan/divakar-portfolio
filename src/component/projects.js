import "../CssComponent/projects.css";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bec from "../Images/project-img/bec.png";
import expenses from "../Images/project-img/expenses.png";
import movie from "../Images/project-img/movie.png";
import saloon from "../Images/project-img/saloon.png";
import todo from "../Images/project-img/todo.png";
import supermarket from "../Images/project-img/super.png";
import "aos/dist/aos.css";
const projects = [
  {
    title: "To-Do Application",
    date: "Jul 2023",
    description:
      "A simple and efficient to-do application to manage your daily tasks. Features include task prioritization, reminders, and progress tracking.",
    githubLink: "https://chatgpt.com/",
    imgUrl: todo,
  },
  {
    title: "British English Certify",
    date: "Jan 2024",
    description:
      "A platform designed to help users certify their proficiency in British English. Offers various tests, tutorials, and certification programs.",
    link: "#",
    imgUrl: bec,
  },
  {
    title: "Expense Tracker",
    date: "Aug 2023",
    description:
      "An intuitive app to track your expenses and manage your budget. Features include categorization of expenses, budget setting, and detailed reports.",
    link: "#",
    imgUrl: expenses,
  },
  {
    title: "Supermarket Management System",
    date: "Nov 2022",
    description:
      "A comprehensive solution for managing supermarket operations, including inventory management, billing, and customer relationship management.",
    link: "#",
    imgUrl: supermarket,
  },
  {
    title: "Movie IMDb",
    date: "Dec 2023",
    description:
      "A movie database application to browse, search, and rate movies. Includes detailed information on cast, crew, and user reviews.",
    link: "#",
    imgUrl: movie,
  },
  {
    title: "Saloon and Spa Booking System",
    date: "Sep 2023",
    description:
      "An online booking system for salons and spas. Features include appointment scheduling, service selection, and customer management.",
    link: "#",
    imgUrl: saloon,
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
      <h1>Projects</h1>
      <div className="carousel-container" data-aos="zoom-in">
        <button className="arrow left-arrow" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <div className="carousel">
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
                      <button className="view-code-button">View Code</button>
                    </a>
                    <a href={project.Link} target="_blank" rel="noopener noreferrer">
                      <button className="open-button">Open</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <button className="arrow right-arrow" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
});
export default Project;