import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
    this.state = {
      active: false,
    };
  }

  toggleClass() {
      this.setState({active: !this.state.active})
    }

    onSignOut() {
       this.props.handleSignOut();
   }


  render() {
    if(this.props.isLoggedIn){
      return (
        <div className="Navbar">
          <header className="titlebar">
            <a href="/" className="title" onClick={this.onSignOut}>Muster</a>
              <div className="submenu">
                <a href="/" className="contact">Contact</a>
                <a href="/" className="support">Support</a>
                <a href="/" className="budget">Budget</a>
              </div>
              <div className="menu">
              <a href="/" className="menuLink">Account</a>
              <div className="greeting">Welcome {this.props.user.first_name}!</div>
              <button className="logoutButton" onClick={this.onSignOut}>Sign Out</button>
            </div>
          </header>
        </div>
      )
    }
  return (
    <div className="NavBar">
      <header className="titlebar">
      <a href="/" className="title" onClick={this.onSignOut}>Muster</a>
      <div className="submenu">
        <a href="/" className="contact">Contact</a>
        <a href="/" className="support">Support</a>
        <a href="/" className="about">How it works</a>
      </div>
      <div className="menu">
        <a href="/" className="menuLink">Login</a>
        <button className="navButtons">Signup</button>
        <div className="greeting">Logged out</div>
      </div>
      </header>
    </div>
  )}
};

export default NavBar;
