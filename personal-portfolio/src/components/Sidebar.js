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
 import {Navbar} from 'react-bootstrap';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar
        expand="lg"z
        >
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
        </Navbar>
      </div> 
  )
}

export default Sidebar
