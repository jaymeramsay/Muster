import React, { Component } from 'react';
import axios from 'axios';
import Wishlist from "./wish_list_sidebar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.getWishlist = this.getWishlist.bind(this);
    this.state = {data: 'loading...',
                  width: null,
                  height: null,
                  wishlist: null}
  }


  componentDidMount() {
      let width = .9 * window.innerWidth;
      let height = .5 * width;
      this.getWishlist();
      this.setState({width: width, height: height})
    }

  componentDidUpdate() {
    console.log("state:" + this.state);
  }

getWishlist() {
  // ev.preventDefault();
  axios.get(`https://cors-anywhere.herokuapp.com/http://www.justinscarpetti.com/projects/amazon-wish-lister/api/?id=${this.props.user.amazon_id}`)
  .then((response) => {
    this.setState({wishlist: response.data});
    console.log(response);
    console.log(this.state.wishlist[0].name);
  })
}


  render() {
    console.log("dashboard props:" + this.props);
    return (
      <div className="Dashboard">
      <button onClick={(ev) => this.getWishlist(ev)}>get wishlist</button>
      <Wishlist user={this.state.user} wishlist={this.state.wishlist}/>

      </div>
  )}
};

export default Dashboard;
