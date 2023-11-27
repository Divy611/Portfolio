import React from 'react';
import "./App.css";
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Skills from './Components/Skills/skills';
import Projects from './Components/Projects/projects';
import Experience from './Components/Experience/experience';

function openHeader() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function App() {
  return (
    <Router>
      <div className="topnav" id="myTopnav" style={{ paddingLeft: "5px" }}>
        <NavLink to="/" className="active text-4xl font-semibold" style={{ fontSize: "x-large", fontFamily: "Poppins" }}>Divy Parikh</NavLink>
        <NavLink to="/about" className='text-3xl lg:text-4xl' style={{ fontFamily: "Poppins" }}>About</NavLink>
        <NavLink to="/skills" className='text-3xl lg:text-4xl' style={{ fontFamily: "Poppins" }}>Skills</NavLink>
        <NavLink to="/projects" className='text-3xl lg:text-4xl' style={{ fontFamily: "Poppins" }}>Projects</NavLink>
        <NavLink to="/experience" className='text-3xl lg:text-4xl' style={{ fontFamily: "Poppins" }}>Experience</NavLink>
        <NavLink to="javascript:void(0);" className="icon" onClick={openHeader}>&#9776;</NavLink>
        <NavLink to="contact" className='text-3xl lg:text-4xl' style={{ fontFamily: "Poppins" }}>Contact</NavLink>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Main />
      </div>
      <div style={{ paddingTop: "135px" }}>
        <About />
      </div>
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Switch>
        {/* <Route exact path="/" component={Main} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/projects" component={Projects} />
        {/* <Route exact path="/" render={() => {
          return (<><Main /></>)
        }}>
        </Route>
        <Route exact path="/about" render={() => {
          return (<><About /></>)
        }}>
        </Route>
        <Route exact path="/contact" render={() => {
          return (<><Contact /></>)
        }}>
        </Route>
        <Route exact path="/skills" render={() => {
          return (<><Skills /></>)
        }}>
        </Route>
        <Route exact path="/experience" render={() => {
          return (<><Experience /></>)
        }}>
        </Route>
        <Route exact path="/projects" render={() => {
          return (<><Projects /></>)
        }}>
        </Route> */}
      </Switch>
      <Footer />
    </Router >
  );
}

export default App;
