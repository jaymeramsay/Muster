import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
    this.state = {
      active: false,
      user: ''
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
        <div className="greeting">Welcome!</div>
        <div className="sample2">Booyah</div>
        <div className="sample1">About</div>
        </div>
        <button onClick={this.onSignOut}>Sign Out</button>
        </header>
      )
    }
  return (
    <header className="titlebar">
    <h1 className="title">Muster</h1>
    <div className="menu">
    <div className="greeting">You are logged out.</div>
    <div className="sample2">Booyah</div>
    <div className="sample1">About</div>
    </div>
    </header>
  )}
};

export default NavBar;
