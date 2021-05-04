import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from "./components/pages/Home"
import Products from "./components/pages/Products"
import Services from "./components/pages/Services"
import SignUp from "./components/pages/SignUp"

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/products' component={Products} />
      </Switch>
    </Router>
    </div>
  );
}

export default App
