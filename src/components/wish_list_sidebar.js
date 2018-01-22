import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import axios from 'axios';

import WishlistItem from './wish_list_item';

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {data: 'loading...',
                  width: null,
                  height: null
                }
  }


componentDidMount() {
  let width = .9 * window.innerWidth;
  let height = .5 * width;
  this.setState({width: width, height: height})
  console.log(this.props.wishlist)
    }

 render() {
  const list = this.props.wishlist.map((item) => {
     return <WishlistItem item={item} currentItem={this.props.currentItem} displayPrice={this.props.displayPrice}/>;
   })

   return (
     <Scrollbars
     className="scrollbar"
     autoHeight
     autoHeightMax={1000}
     >
     <div className="Wishlist">
     {list}
     </div>
     </Scrollbars>
      )
    }
 };

export default Wishlist;
