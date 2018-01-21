import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.onSignUp = this.onSignUp.bind(this);
    this.state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    amazon_id: '',
    salary: '',
    }
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

  onSalaryChange(salary) {
    this.setState({salary});
  }

  onSignUp(ev){
    ev.preventDefault();
    const {first_name, last_name, email, password, amazon_id, salary} = this.state;
    axios.post('/auth/signup',
    {first_name: this.state.first_name,
    last_name: this.state.last_name,
    email: this.state.email,
    password: this.state.password,
    amazon_id: this.state.amazon_id,
    salary: this.state.salary
    })
    .then((response) => {
      this.props.handleAuth(response.data);
    })
    .catch((err) => {
      console.error(err);
    })
  }


  render() {
      if (this.props.isLoggedIn) {
        return (
          <Redirect to='/dashboard'/>
        )
      }
      return (
      <div className="Signup">
        <div className="signUpForm">
          <form>
            <div className="nameinputs">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="signinInput"
                value={this.state.first_name}
                onChange={event => this.onFirstNameChange(event.target.value)} />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="signinInput"
                value={this.state.last_name}
                onChange={event => this.onLastNameChange(event.target.value)} />
            </div>
            <div className="emailinputs">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="signinInput"
                value={this.state.email}
                onChange={event => this.onEmailChange(event.target.value)} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="signinInput"
                value={this.state.password}
                onChange={event => this.onPasswordChange(event.target.value)} />
            </div>
            <div className="userinputs">
            <input
                type="text"
                name="amazon_id"
                placeholder="Amazon ID"
                className="signinInput"
                value={this.state.amazon_id}
                onChange={event => this.onAmazonIdChange(event.target.value)} />
              <input
                type="text"
                name="salary"
                placeholder="Salary"
                className="signinInput"
                value={this.state.salary}
                onChange={event => this.onSalaryChange(event.target.value)} />
              </div>
              <div className="button">
                <button className="submitButton" onClick={(ev) => this.onSignUp(ev)}>Sign-up Now</button>
              </div>
          </form>
        </div>
      </div>
    )}
};

export default Signup;
