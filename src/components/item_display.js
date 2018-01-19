import React, { Component } from 'react';

class ItemDisplay extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="ItemDisplay">
      <img className="imagedisplay" src={this.props.item}/>
      <div>{this.props.price}</div>
      </div>
    )
  }

}

export default ItemDisplay;
