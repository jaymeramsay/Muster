import React, { Component } from 'react';
import axios from 'axios';

class WishlistItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    let extractsPrice = this.props.item['new-price'].substring(27,32);
    this.props.currentItem(this.props.item.picture);
    this.props.displayPrice(extractsPrice)
  }

  render(){
    let listPrice = this.props.item['new-price'];
    let extractsPrice = this.props.item['new-price'].substring(27,32);

    return(
    <div className="WishlistItem" onClick={this.handleClick}>
      <div className="itemcontainer">
        <div className="listpicturecontainer">
          <img className="listpicture" src={this.props.item.picture}/>
        </div>
        <div className="listnamecontainer">
          <div className="listname">{this.props.item.name}</div>
        </div>
        <div className="pricecontainer">
          <div className="newprice"> {listPrice ? extractsPrice  : ''} </div>
        </div>
      </div>
    </div>
    );
  }
};

export default WishlistItem
