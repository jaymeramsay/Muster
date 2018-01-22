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
        <div className="imagedisplaycontainer">
          <img className="imagedisplay" src={this.props.item}/>
          <div className="priceHoursDisplay">
            <div className="cost">Cost: {this.props.price}</div>
            <div className="hours"> Required Hourly Labor: {isNaN(this.displayHoursNeeded(income)) ? null : this.displayHoursNeeded(income)} </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ItemDisplay;
