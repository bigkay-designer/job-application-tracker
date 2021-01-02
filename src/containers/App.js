import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signup from '../components/pages/Signup'
import Login from '../components/pages/Login'
import Nav from '../components/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
