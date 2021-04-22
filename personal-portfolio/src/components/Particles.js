import React from 'react'
import Particles from 'react-particles-js';
import './Particles.scss'


const HeroBackground = () => {
  return (
    <div>
    <Particles
		id="Particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 40,
	        },
	        "size": {
	            "value": 3
	        },
					// "color":{"value":"#08FDD8"},
	    },
			
			
	    "interactivity": {
				"detect_on": "window", 
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse",				
	            }
	        }
	    }
	}} />
    </div>
  )
}

export default HeroBackground
