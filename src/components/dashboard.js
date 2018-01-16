import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {data: 'loading...',
                  amazon_id: '',
                  width: null,
                  height: null}
  }

  onAmazonIdChange(amazon_id) {
    this.setState({amazon_id});
  }

  componentDidMount() {
      let width = .9 * window.innerWidth;
      let height = .5 * width;
      this.setState({width: width, height: height})

      console.log('inside componentDidMount function');
      // if(this.props.user && this.props.user.userData) {
      //   this.setState({data: this.props.user.userData})
      // }
    }


getWishlist(ev) {
  ev.preventDefault();
  console.log('wishlist clicked')
  axios.get('http://www.justinscarpetti.com/projects/amazon-wish-lister/api/?id=37XI10RRD17X2', {
  headers: {
	  'Access-Control-Allow-Origin': '*',
    }
	})
  .then(function (response) {
  console.log(response.data);
  })
}


  render() {
    return (
      <div>
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
