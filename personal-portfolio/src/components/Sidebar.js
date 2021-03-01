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
    <Router>
      <div className="sidebar">
        <nav>
          <div className="nav-links">
          <ul>
            <li>
              <FaHome />
            </li>
            <li>
              <FaEnvelopeSquare />
            </li>
            <li>
              <FaFolder />
            </li>
          </ul>
          </div>
        </nav>
      </div>
    </Router>
  )
}

export default Sidebar
