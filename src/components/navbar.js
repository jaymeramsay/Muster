import React, {Component} from 'react';

class NavBar extends Component {
  render() {
  return (
    <header className="titlebar">
    <h1 className="title">Muster</h1>
    <div className="menu">
    <button>SignUp</button>
    <button>Login</button>
    </div>
    </header>
  )}
};

export default NavBar;
