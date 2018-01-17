import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
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


getWishlist(ev) {
  ev.preventDefault();
  console.log('wishlist clicked')
  axios.get('https://cors-anywhere.herokuapp.com/http://www.justinscarpetti.com/projects/amazon-wish-lister/api/?id=37XI10RRD17X2')
  .then(function (response) {
  console.log(response);
  })
}


  render() {
    return (
      <div>
      <h1>DASHBOARD</h1>
        <form>
        <input
          type="text"
          name="amazon_id"
          placeholder="Amazon ID"
          className="amazonInput"
          value={this.state.amazon_id}
          onChange={event => this.onAmazonIdChange(event.target.value)} />
          <button className="wishlistSubmit" onClick={(ev) => this.getWishlist(ev)}>Get Wishlist</button>
        </form>
      </div>
  )}
};

export default Dashboard;
