import React from 'react'
import './About.scss'
import GoogleMaps from './GoogleMaps'

const About = () => {
  return (
    <div id="About" className="About--Page">
    {/* <h1>About</h1> */}
      <div className="Content--Container">
        <div className="Left--Container">
          <div className="Left--Main">
            <div className="Bio">
              <h2>A Little About Me</h2>
              <p></p>
            </div>
            <div className="Languages">
              <h2>Languages</h2>
              <p>Tech stack Tech stachTech stack Tech stach Tech stack Tech stach Tech stack Tech stach Tech stack Tech stach Tech stack Tech stach</p>
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
