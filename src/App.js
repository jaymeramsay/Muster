import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './components/navbar';
import Landing from './components/landing';
import Dashboard from './components/dashboard';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor(props){
     super(props);
   }

  render() {
    return (
      <div className = "App" >
      <NavBar/>
      <Route exact path='/' render={(props) => <Landing {...props}/>}/>
      <Route path='/dashboard' render={(props) => <Dashboard {...props}/>}/>
      </div>
    );
  }
}

export default App;
