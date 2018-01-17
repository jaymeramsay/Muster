import React, { Component } from 'react';
import axios from 'axios';

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {data: 'loading...',
                  width: null,
                  height: null}
  }


componentDidMount() {
  let width = .9 * window.innerWidth;
  let height = .5 * width;
  this.setState({width: width, height: height})
    }


 render() {
   return (
     <div className="Wishlist">
     <aside className="sidebar">

     </aside>
     </div>
   )
  }
 };

export default Wishlist;
