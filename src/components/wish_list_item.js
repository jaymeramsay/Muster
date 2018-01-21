import React, { Component } from 'react';
import axios from 'axios';

class WishlistItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    let extractsPrice = this.props.item['new-price'].substring(27,32);
    console.log(this.props.item.picture, extractsPrice);
    this.props.currentItem(this.props.item.picture);
    this.props.displayPrice(extractsPrice)
  }

  render(){
    let listPrice = this.props.item['new-price'];
    let extractsPrice = this.props.item['new-price'].substring(27,32);

    return(
    <div className="WishlistItem" onClick={this.handleClick}>
      <div className="listpicturecontainer">
        <img className="listpicture" src={this.props.item.picture}/>
      </div>
      <h5 classname="listname">{this.props.item.name}</h5>
      <div className="newprice"> {listPrice ? extractsPrice  : ''}</div>
    </div>
    );
  }
};

export default WishlistItem
