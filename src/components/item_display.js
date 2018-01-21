import React, { Component } from 'react';

class ItemDisplay extends Component {
  constructor(props){
    super(props);
    this.calculateHourlySalary = this.calculateHourlySalary.bind(this);
    this.displayHoursNeeded = this.displayHoursNeeded.bind(this);
  }

  calculateHourlySalary(salary){
    let hourlySalary = Math.floor(salary/2080);
    return hourlySalary;
  }

  displayHoursNeeded(salary){
    let hourlySalary = Math.floor(salary/2080);
    let cost = parseFloat(this.props.price);
    let hours = Math.floor(cost/hourlySalary);
    return hours;
  }

  render(){
    let income = this.props.user.salary;
    return(
      <div className="ItemDisplay">
        <img className="imagedisplay" src={this.props.item}/>
        <div>{this.props.price}</div>
        <div> {this.displayHoursNeeded(income)}</div>
      </div>
    )
  }

}

export default ItemDisplay;
