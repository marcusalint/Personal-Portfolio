import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



function App() {

  return ( 
    <div>
    <Router>
      <Switch>
        <Route  path="/" exact component={Home} />
        <Route  path="/contact" exact component={Contact} />
        <Route  path="/about" exact component={About} />
        <Route  path="/projects" exact component={Projects} />
      </Switch>
    </Router>
    </div>
  );
}

  

export default App;
