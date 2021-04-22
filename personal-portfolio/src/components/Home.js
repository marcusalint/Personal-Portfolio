import React, {useState, useEffect} from 'react';
import './Home.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import {Link as LinkS} from 'react-scroll'; 
import MouseTrail from './MouseTrail';
import Particles from './Particles';



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const salar = "Salar";

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} /> 
    <Navbar toggle={toggle}/>
    <div name="home" className="home">
      <Particles  />
      <div className="main">
      <h1><span style={{display: "inline-block"}}>Hi, I'm </span><span style={{display: "inline-block", marginLeft: "12px", color: "#630fe4"}}>Salar.</span></h1>
      <h1>Full Stack Developer.</h1>
      <LinkS to="projects" smooth={true} duration={500} spy={true} offset={-80}><button id="project--button">View Projects</button></LinkS>
      </div>
    </div>
    <Projects name="projects"/>
    <About name="about"/>
    <Footer />
    </>
  )
}

export default Home