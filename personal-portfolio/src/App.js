import logo from './logo.svg';
import './App.css';
import SidebarNew from './components/SidebarNew';
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
      <div>
        <Navbar /> 
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
