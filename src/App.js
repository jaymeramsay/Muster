import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './components/navbar';
import Landing from './components/landing';
import Dashboard from './components/dashboard';
import Signup from './components/signup';

import './App.css';

class App extends Component {
   constructor(props){
     super(props);
     this.handleAuth = this.handleAuth.bind(this);
     this.handleSignOut = this.handleSignOut.bind(this);
     this.handleSalaryEdit = this.handleSalaryEdit.bind(this);
     this.state = { isLoggedIn: false, user: null }
   }

   handleAuth(user) {
      this.setState({ isLoggedIn:true, user:user})
    }

    handleSignOut(){
     this.setState({ isLoggedIn: false, user: null });
     window.location.href="/";
    }

    handleSalaryEdit(salary){
      let updatedUser = this.state.user;
      updatedUser.salary = salary;
      this.setState({user: updatedUser})
    }

  render() {
    return (
      <div className = "App" >
      <NavBar isLoggedIn={this.state.isLoggedIn} handleSignOut={this.handleSignOut} user={this.state.user}/>
      <Route exact path='/'render={(props) => <Landing  {...props} handleAuth={this.handleAuth} user={this.state.user} isLoggedIn={this.state.isLoggedIn}/>}/>
      <Route path='/dashboard' render={(props) => <Dashboard {...props} handleSalaryEdit={this.handleSalaryEdit} user={this.state.user} isLoggedIn={this.state.isLoggedIn} />}/>
      <Route path='/signup' render={(props) => <Signup {...props} handleAuth={this.handleAuth} user={this.state.user} isLoggedIn={this.state.isLoggedIn} />}/>
      </div>
    );
  }
}

export default App;
