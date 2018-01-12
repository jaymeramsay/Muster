import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class Landing extends Component {
  constructor(props) {
    super(props);
    // this.onEmailSignIn = this.onEmailSignIn.bind(this);

    // this.state = { email: '', password: ''}
  }

  onEmailChange(email) {
    this.setState({email});
  }

  onPasswordChange(password) {
    this.setState({password});
    }

  // axios.get('https://localhost:7070/users')
  // .then(function(response){
  //   console.log(response.data); // ex.: { user: 'Your User'}
  //   console.log(response.status); // ex.: 200
  // });

  render() {
    if (this.props.isLoggedIn) {
      return (
        <Redirect to='/dashboard'/>
      )
    }
    return (
    <div class="landingForm">
      <form>
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="loginInput"

          onChange={event => this.onEmailChange(event.target.value)} />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="loginInput"

          onChange={event => this.onPasswordChange(event.target.value)} />
          <div className="buttons">
            <button className="formSubmit" onClick={(e) => this.onEmailSignIn(e)}>Sign in/create account with E-mail</button>
            <div className="g-signin2" data-onsuccess="onSignIn" onClick={(e) => this.onGoogleSignIn(e)}></div>
          </div>
      </form>
    </div>
  )}
};
export default Landing;
