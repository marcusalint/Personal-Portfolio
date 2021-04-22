import React from 'react'
import './About.scss'
import GoogleMaps from './GoogleMaps'

const About = () => {
  return (
    <div id="About" className="About--Page" >
      <div className="Content--Container">
        <div className="Left--Container">
          <div className="Left--Main">
            <div className="Bio">
              <h1 style={{textAlign: "left"}}>About</h1>
              <p style={{fontSize: "19px", lineHeight: "2em"}}>I'm a software developer who loves transforming cool ideas into scalable and responsive applications.</p>
            </div>
            <div className="Languages"> 
              <h2 className="Languages--Heading">Technologies</h2>
              <p>React, Express, PostgresQL, NodeJS, Ruby, Rails. JQuery, HTML, SASS, CSS, Javascript, AJAX, APIs, Material-UI</p>
            </div>
            <div className="Resume--And--Contact">
              <div className="Contact">
                <h2 className="Contact--Heading">Contact</h2>
                <p id="Email">salartaeb@gmail.com</p>
              </div>
              </div>
              <a className="View--Resume--Button" href="https://drive.google.com/file/d/1jEP4w9Vz3We85HZoJ-1h3yH7o7-7omG-/view?usp=sharing">View Resume</a>
          </div>
        </div> 
        <div className="Right--Container">
          <GoogleMaps/>
        </div>
      </div>
  </div>
  )
}
// I have a passion for bringing


export default About
