import React, { Component } from 'react';
import axios from 'axios';
import Wishlist from "./wish_list_sidebar";
import Salary from './salary_breakdown'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.getWishlist = this.getWishlist.bind(this);
    this.currentItem = this.currentItem.bind(this);
    this.state = {data: 'loading...',
                  // user: user,
                  width: null,
                  height: null,
                  wishlist: [],
                  item: null}
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

  currentItem(item){
    this.setState({item});
  }

getWishlist() {
  axios.get(`https://cors-anywhere.herokuapp.com/http://www.justinscarpetti.com/projects/amazon-wish-lister/api/?id=${this.props.user.amazon_id}`)
  .then((response) => {
    this.setState({wishlist: response.data});
  })
}


  render() {

    return (
      <div className="Dashboard">
      <div>
      <Wishlist user={this.state.user} wishlist={this.state.wishlist} currentItem={this.currentItem}/>
      </div>
      <div className="dashboardcontainer">
        <Salary handleSalaryEdit={this.props.handleSalaryEdit} user={this.props.user}/>
      </div>
      </div>
    );
  }
};

export default Dashboard;
