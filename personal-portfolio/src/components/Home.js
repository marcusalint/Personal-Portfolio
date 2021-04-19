import React, {useState, useEffect} from 'react';
import './Home.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Projects from './Projects';
import {Link as LinkS} from 'react-scroll'; 
import MouseTrail from './MouseTrail';
import Particles from './Particles';



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    {/* <MouseTrail /> */}
    {/* <Particles /> */}
    <Sidebar isOpen={isOpen} toggle={toggle} /> 
    <Navbar toggle={toggle}/>
    <div name="home" className="home">
      <h1>Hi, I'm Salar.</h1>
      <h1>Full Stack Developer.</h1>
      <LinkS to="projects" smooth={true} duration={500} spy={true} offset={-80}><button id="project--button">View Projects</button></LinkS>
      {/* <button id="contact--button">Contact</button> */}
    </div>
    <Projects name="projects"/>
    </>
  )
}

export default Home
