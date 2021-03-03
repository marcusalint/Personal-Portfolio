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
          <div className="nav-links">
          <ul className="Nav--Container">
            <button className="Nav--Item">
             <Link to="/home">
               <FaHome />
             </Link>
            </button>
            <button className="Nav--Item">
             <Link to="/projects">
               <FaFolder />
             </Link>
            </button>
          </ul>
          </div>
        </nav>
      </div>
  )
}

export default Sidebar
