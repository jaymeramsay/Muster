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
        <header className="titlebar">
        <h1 className="title">Muster</h1>
        <div className="menu">
        <div className="greeting">Welcome {this.props.user.first_name}!</div>
        </div>
        <button onClick={this.onSignOut}>Sign Out</button>
        </header>
      )
    }
  return (
    <header className="titlebar">
    <div className="title">Muster</div>
    <div className="menu">
    <div className="greeting">You are logged out.</div>
    </div>
    </header>
  )}
};

export default NavBar;
