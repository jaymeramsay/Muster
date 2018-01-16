import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.onSignUp = this.onSignUp.bind(this);
    this.state = {first_name: '', last_name: '', email: '', password: '', amazon_id: ''}
  }
  onFirstNameChange(first_name){
    this.setState({first_name});
  }

  onLastNameChange(last_name){
    this.setState({last_name})
  }

  onEmailChange(email) {
    this.setState({email});
  }

  onPasswordChange(password) {
    this.setState({password});
  }

  onAmazonIdChange(amazon_id) {
    this.setState({amazon_id});
  }

  onSignUp(ev){
    console.log('hitting signup button')
    ev.preventDefault;
    const {first_name, last_name, email, password, amazon_id} = this.state;
    axios.post('/auth/signup', {first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email, hashed_password: this.state.password, amazon_id: this.state.amazon_id})
    .then(function(response){
      response.data;
    })
  }


  render() {
      if (this.props.isLoggedIn) {
        return (
          <Redirect to='/dashboard'/>
        )
      }
      return (
      // <h1>Booyah Signup</h1>
      <div class="landingForm">
        <form>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="loginInput"
            value={this.state.first_name}
            onChange={event => this.onFirstNameChange(event.target.value)} />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="loginInput"
            value={this.state.last_name}
            onChange={event => this.onLastNameChange(event.target.value)} />
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
          <input
            type="text"
            name="amazon_id"
            placeholder="Amazon ID"
            className="amazonInput"
            value={this.state.amazon_id}
            onChange={event => this.onAmazonIdChange(event.target.value)} />
            <div className="buttons">
              <button className="formSubmit" onClick={(ev) => this.onSignUp(ev)}>Sign-up Now</button>
            </div>
        </form>
      </div>
    )}
};

export default Signup;
