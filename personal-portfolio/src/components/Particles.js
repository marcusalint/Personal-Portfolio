import React from 'react'
import Particles from 'react-particles-js';
import './Particles.scss'


const HeroBackground = () => {
  return (
    <div>
    <Particles
		className="Particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    </div>
  )
}

export default HeroBackground
