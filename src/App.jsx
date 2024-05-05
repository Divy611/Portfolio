import "./App.css";
import React from 'react';
//import { motion } from "framer-motion";
import Main from './Components/Main/main';
import About from './Components/About/about';
import Footer from './Components/Footer/footer';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contact/contact';
import Projects from './Components/Projects/projects';
import Experience from './Components/Experience/experience';
import ScrollButton from "./Components/ScrolltoTop/scrollToTop";
import Certifications from "./Components/Certifications/certifications";

function openHeader() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {
  return (
    <>
      <div className="topnav" id="myTopnav" style={{ paddingLeft: "5px", zIndex: "100" }}>
        <a className="active text-4xl font-semibold" style={{ fontSize: "x-large", fontFamily: "Poppins" }}>
          <button onClick={() => scrollToSection('main')} style={{ fontFamily: "Poppins" }}>Divy Parikh</button>
        </a>
        <a className='text-3xl lg:text-4xl' style={{ fontFamily: "Poppins" }}>
          <button onClick={() => scrollToSection('about')} style={{ fontFamily: "Poppins" }}>About</button>
        </a>
        <a className='text-3xl lg:text-4xl' style={{ fontFamily: "Poppins" }}>
          <button onClick={() => scrollToSection('skills')} style={{ fontFamily: "Poppins" }}>Skills</button>
        </a>
        <a className='text-3xl lg:text-4xl' style={{ fontFamily: "Poppins" }}>
          <button onClick={() => scrollToSection('projects')} style={{ fontFamily: "Poppins" }}>Projects</button>
        </a>
        <a className='text-3xl lg:text-4xl' style={{ fontFamily: "Poppins" }}>
          <button onClick={() => scrollToSection('certifications')} style={{ fontFamily: "Poppins" }}>Certifications</button>
        </a>
        <div className="experiencebutton">
          <a className='text-3xl lg:text-4xl' style={{ fontFamily: "Poppins" }}>
            <button onClick={() => scrollToSection('experience')} style={{ fontFamily: "Poppins" }}>Experience</button>
          </a>
        </div>
        <a href="javascript:void(0);" className="icon" onClick={openHeader}>&#9776;</a>
        <a className='text-3xl lg:text-4xl' style={{ fontFamily: "Poppins" }}>
          <button onClick={() => scrollToSection('contact')} style={{ fontFamily: "Poppins" }}>Contact</button>
        </a>
      </div>
      <div className="container">
        <div id="main" style={{ paddingTop: "10px" }}>
          <Main />
        </div>
        <div id="about" style={{ paddingTop: "135px" }}>
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div className="scrollToTopButton">
          <ScrollButton />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
