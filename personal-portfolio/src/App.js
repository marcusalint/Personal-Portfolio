import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Home from './components/Contact';
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
      <div>
        <Sidebar />
        
      </div>
      <div>
      <MouseTrail />
      <Switch>
        <Route  path="/home" exact component={Home} />
        <Route  path="/projects" exact component={Projects} />
        <Route  path="/contact" exact component={Contact} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
