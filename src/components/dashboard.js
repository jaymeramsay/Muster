import React, { Component } from 'react';
import axios from 'axios';
import Wishlist from "./wish_list_sidebar";
import Salary from './salary_breakdown';
import ItemDisplay from './item_display';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.getWishlist = this.getWishlist.bind(this);
    this.currentItem = this.currentItem.bind(this);
    this.displayPrice = this.displayPrice.bind(this);
    this.state = {data: 'loading...',
                  width: null,
                  height: null,
                  wishlist: [],
                  item: null,
                  price: null}
  }

  componentDidMount() {
      let width = .9 * window.innerWidth;
      let height = .5 * width;
      this.getWishlist();
      this.setState({width: width, height: height})
    }

  componentDidUpdate() {
    console.log("state:" + JSON.stringify(this.state));
  }

  currentItem(item){
    this.setState({item});
  }

  displayPrice(price){
    this.setState({price});
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
      <Wishlist user={this.state.user} wishlist={this.state.wishlist} currentItem={this.currentItem} displayPrice={this.displayPrice}/>
      </div>
      <div className="dashboardcontainer">
        <Salary handleSalaryEdit={this.props.handleSalaryEdit} user={this.props.user}/>
        <ItemDisplay user={this.props.user} wishlist={this.state.wishlist} item={this.state.item} price={this.state.price} salary={this.props.user.salary}/>
      </div>
      </div>
    );
  }
};

export default Dashboard;
