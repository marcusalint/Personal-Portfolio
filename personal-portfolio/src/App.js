import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import MouseTrail from './components/MouseTrail'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import Projects from './components/Projects';

function App() {

  return ( 
    <Router>
      <Switch>
        <Route  path="/home" exact component={Home} />
        <Route  path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  
  );
}

export default App;
