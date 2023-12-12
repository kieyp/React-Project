import { Route,Router,Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/"/>
          <Route path="/cart"/>
          <Route path="/contacts"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
