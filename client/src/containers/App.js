import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signup from '../components/authentication/Signup'
import Login from '../components/authentication/Login'
import Home from '../components/pages/Home'
import AddJobs from '../components/pages/AddJobs'
import Landing from '../components/pages/Landing'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/addjobs" component={AddJobs} />
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
