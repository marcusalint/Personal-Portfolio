import React from 'react'
import './Sidebar.scss';
import { FaHome,
  FaEnvelopeSquare,
  FaFolder,
 } from "react-icons/fa";
 import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link 
 } from 'react-router-dom'; 


const Sidebar = () => {
  return (
    // <Router>

      <div className="sidebar">
        <nav>
          {/* <img id="Logo" src="https://i.imgur.com/rS6mUCA.png"></img> */}
          <div className="nav-links">
          <ul id="Nav--Container">
            <li className="Nav--Item">
             <Link to="/home">
               <FaHome className="Icon"/>
             </Link>
            </li>
            <li className="Nav--Item">
             <Link to="/projects">
               <FaFolder className="Icon"/>
             </Link>
            </li>
            <li className="Nav--Item">
             <Link to="/contact">
             <FaEnvelopeSquare className="Icon"/>
             </Link>
            </li>
            
          </ul>
          </div>
        </nav>
      </div>
      
  )
}

export default Sidebar
