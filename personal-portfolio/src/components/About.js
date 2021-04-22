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
              <p style={{fontSize: "19px", lineHeight: "2em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="Languages">
              <h2>Languages</h2>
              <p>Tech stack Tech stachTech stack Tech stach Tech stack Tech stach Tech stack Tech stach Tech stack Tech stach Tech stack Tech stachck Tech stach Tech stack Tech stach Tech stack Tech stach Tech stack Tech stach sdnajsdnjan jsndans</p>
            </div>
            <div id="Resume--And--Contact" style={{display: "flex",flexDirection: "row", justifyContent: "space-between"}}>
              <a className="View--Resume--Button" href="https://www.w3schools.com">View Resume</a>
              <div className="Contact">
              <h2>Contact</h2>
              <p id="Email">salartaeb@gmail.com</p>
              </div>
            </div>
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
