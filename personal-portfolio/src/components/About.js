import React from 'react'
import './About.scss'
import GoogleMaps from './GoogleMaps'

const About = () => {
  return (
    <div id="About" className="About--Page" >
    {/* <h1>About</h1> */}
      <div className="Content--Container">
        <div className="Left--Container">
          <div className="Left--Main">
            <div className="Bio">
              <h1 style={{textAlign: "left"}}>About</h1>
              <p style={{fontSize: "19px", lineHeight: "2em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="Languages">
              <h2 className="Languages--Heading">Languages</h2>
              <p>Tech stack Tech stachTech stack Tech stach Tech stack Tech stach Tech stack Tech stach Tech stack Tech stach Tech stack Tech stachck Tech </p>
            </div>
            <div className="Resume--And--Contact">
              <div className="Contact">
              <h2 className="Contact--Heading">Contact</h2>
              <p id="Email">salartaeb@gmail.com</p>
              </div>
              </div>
              <a className="View--Resume--Button" href="https://www.w3schools.com">View Resume</a>
            
          </div>
        </div> 
        <div className="Right--Container">
          <GoogleMaps/>
        </div>
      </div>
  </div>
  )
}

export default About
