import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    // this.onSignOut = this.onSignOut.bind(this);
    this.userGreeting = this.userGreeting.bind(this);
    this.guestGreeting = this.guestGreeting.bind(this);
    this.state = {
      active: false,
      user: ''
    };
  }

  toggleClass() {
      this.setState({active: !this.state.active})
    }

   //  onSignOut() {
   //   firebase.auth().signOut()
   //     .then((result) => {
   //       this.props.handleSignOut();
   //     });
   // }


userGreeting(props) {
  return <div className="greeting">Welcome back!</div>;
}

guestGreeting(props) {
  return <div className="greeting">Please sign up.</div>;
}
  render() {
  return (
    <header className="titlebar">
    <h1 className="title">Muster</h1>
    <div className="menu">
    <div className="greeting">Please sign up.</div>
    <div className="sample2">Booyah</div>
    <div className="sample1">About</div>
    </div>
    </header>
  )}
};

export default NavBar;
