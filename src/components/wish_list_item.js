import React, { Component } from 'react';
import axios from 'axios';

class WishlistItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    console.log(event.target.value + " clicking the button");
    // this.props.currentItem(event.target);
  }

  render(){
    let listPrice = this.props.item['new-price'];
    let extractPrice = this.props.item['new-price'].substring(26,32);

    return(
    <div className="WishlistItem" onClick={(ev) => this.handleClick(ev)}>
      <img className="listpicture" src={this.props.item.picture}/>
      <h3 classname="listname">{this.props.item.name}</h3>
      <div name="newprice"> {listPrice ? extractPrice  : ''}</div>
    </div>
    );
  }
};

export default WishlistItem
