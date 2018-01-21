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
   if(this.props.wishlist) {
   return (
     <Scrollbars
     className="scrollbar"
     style={{ width: 300 }}
     autoHeight
     autoHeightMin={300}
     autoHeightMax={500}
     >
     <div className="Wishlist">
     {list}
     </div>
     </Scrollbars>
      )
    }
      return (
        <div className="loader">
          <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
          <span class="sr-only">Loading...</span>
        </div>
      )
  }
 };

export default Wishlist;
