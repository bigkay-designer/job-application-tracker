import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from '../components/Nav'
import Signup from '../components/authentication/Signup'
import Login from '../components/authentication/Login'
import Home from '../components/pages/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
