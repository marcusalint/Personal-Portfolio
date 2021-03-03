import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom'; 

const Home = () => {
  return (
    <div className="home">
      <h1>Hi, I'm Salar.</h1>
      <h1>Full Stack Developer.</h1>
      <Link to="/projects"><button id="project--button">Project</button></Link>
      <button id="contact--button">Contact</button>
    </div>
  )
}

export default Home
