import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
