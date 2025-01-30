import React, { useEffect, useRef } from "react";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Contact from "./component/contact";
import Home from "./component/home";
import About from "./component/about";
import Project from "./component/projects";
import Footer from "./component/footer";
import Tools from "./component/tools";
import Certificates from "./component/certificates";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const toolsRef = useRef(null);
  const certificatesRef = useRef(null);
  return (
    <div className="App">
      <Navbar
        sections={{
          home: homeRef,
          about: aboutRef,
          skills: skillsRef,
          tools: toolsRef,
          project: projectsRef,
          contact: contactRef,
          certificates: certificatesRef,
        }}
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Tools ref={toolsRef} />
      <Project ref={projectsRef} />
      <Certificates ref={certificatesRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
