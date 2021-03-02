import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
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
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
      </div>

    </Router>
  );
}

export default App;
