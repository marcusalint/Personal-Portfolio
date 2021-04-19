import React, {useState, useEffect} from 'react';
import './Home.scss';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Projects from './Projects';
import {Link} from 'react-router-dom'; 
import MouseTrail from './MouseTrail';



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <MouseTrail />
    <Sidebar isOpen={isOpen} toggle={toggle} /> 
    <Navbar toggle={toggle}/>
    <div name="home" className="home">
      <h1>Hi, I'm Salar.</h1>
      <h1>Full Stack Developer.</h1>
      <Link to="/projects"><button id="project--button">View Projects</button></Link>
      {/* <button id="contact--button">Contact</button> */}
    </div>
    <Projects name="projects"/>
    </>
  )
}

export default Home
