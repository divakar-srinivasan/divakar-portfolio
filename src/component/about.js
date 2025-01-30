// src/components/ProfileComponent.js
import React,{useState} from "react";
import "../CssComponent/about.css"; // Import the CSS file
import img from "../Images/myimg.jpg";
const About = React.forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('miniProjects');
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1Sc-p-3AhIdXl0axPv3JVFf4El1xeNv9t/view?usp=sharing"
    );
  };
  return (
    <div className="myprofile-container" ref={ref}>
      <h1>About me</h1>
      <div className="myprofile-header">
        <img
          src={img} // Replace with the correct path to your image
          alt="Profile"
          className="myprofile-image"
        />
        <div className="myprofile-intro">
          <p>
          I am a Full Stack Developer passionate about building scalable, user-friendly web applications. Proficient in MERN (MongoDB, Express.js, React.js, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) stacks, I excel in creating dynamic solutions that enhance user experiences. With experience in React.js, Angular, Node.js, and MongoDB, I develop innovative digital platforms to solve real-world problems.

I have a strong interest in cloud computing (AWS), database management, UI/UX design, and DevOps practices. My background includes internships where I developed responsive web applications using React, Tailwind CSS, and GSAP. I am dedicated to continuous learning and staying ahead in the field.
          </p>
        </div>
      </div>
      <div className="projects-container">
        <button
          className={`projects-card ${activeTab === 'miniProjects' ? 'active' : ''}`}
          onClick={() => setActiveTab('miniProjects')}
        >
          3+ Mini Projects
        </button>
        <button
          className={`projects-card ${activeTab === 'teamProjects' ? 'active' : ''}`}
          onClick={() => setActiveTab('teamProjects')}
        >
          4+ Team Projects
        </button>
        <button
          className={`projects-card ${activeTab === 'realTimeProjects' ? 'active' : ''}`}
          onClick={() => setActiveTab('realTimeProjects')}
        >
          2+ Real Time Projects
        </button>
      </div>

      {activeTab === 'miniProjects' && (
        <div className="about-skills-container">
        <div className="about-skills-list">
          <ul>
            <li>Employee Management System</li>
            <li>Bill Calculator</li>

          </ul>
        </div>
        <div className="about-skills-list">
          <ul>
            <li>Student management System</li>
            <li>IPL Auction</li>

          </ul>
        </div>
      </div>
      )}
      {activeTab === 'teamProjects' && (
        <div className="about-skills-container">
        <div className="about-skills-list">
          <ul>
            <li>Freelancer - TalentCraft  </li>
            <li>Dr.Care - Online Doctor Appointment Booking System  (MEAN)  </li>
           
          </ul>
        </div>
        <div className="about-skills-list">
          <ul>
            <li>Fit-Check-Fitness Tracking System (MERN)</li>
            <li> E-commerce Application (MEVN)</li>
            
          </ul>
        </div>
      </div>
      )}
      {activeTab === 'realTimeProjects' && (
        <div className="about-skills-container">
        <div className="about-skills-list">
          <ul>
            <li>Eventix - Event Booking System (MERN)</li>

          </ul>
        </div>
        <div className="about-skills-list">
          <ul>
            <li>Builder Portfolio for KK construction</li>

          </ul>
        </div>
      </div>
      )}


      <button onClick={handleDownload} className="resume-button">
        Resume
      </button>
    </div>
  );
});

export default About;
