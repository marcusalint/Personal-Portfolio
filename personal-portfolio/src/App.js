import React from 'react';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  return ( 
    <Router>
      <Switch>
        <Route  path="/" exact component={Home} />
        <Route  path="/contact" exact component={Contact} />
        <Route  path="/about" exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
