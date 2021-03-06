import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.onEmailSignIn = this.onEmailSignIn.bind(this);
    this.toSignUpPage = this.toSignUpPage.bind(this);
    this.state = {email: '',
                  password: ''}
  }

  onEmailChange(email) {
    this.setState({email});
  }

  onPasswordChange(password) {
    this.setState({password});
    }

  onEmailSignIn(ev) {
    ev.preventDefault();
    const {email, password} = this.state;
    axios.post('/auth/login', {email: this.state.email, password: this.state.password})
       .then((response) => {
         this.props.handleAuth(response.data);
       })
  }

  toSignUpPage(ev) {
    ev.preventDefault();
    console.log('hitting button');
    const { history } = this.props;
    history.push('/signup');
    }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <Redirect to='/dashboard'/>
      )
    }
    return (
    <div className="Landing">
      <div className="landingForm">
        <form>
          <div className="loginform">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="loginInput"
              value={this.state.email}
              onChange={event => this.onEmailChange(event.target.value)} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="loginInput"
              value={this.state.password}
              onChange={event => this.onPasswordChange(event.target.value)} />
            <button className="formSubmitButton" onClick={(ev) => this.onEmailSignIn(ev)}>Login</button>
          </div>

          <div className="landingsignup">
            <p>Need an account?   Sign up now!</p>
            <button className="formSigninButton" onClick={this.toSignUpPage}>Create a New Account</button>
          </div>
      </form>
    </div>
  </div>
  )}
};
export default Landing;
