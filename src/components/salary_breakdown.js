import React, { Component } from 'react';
import axios from 'axios';

class Salary extends Component {
  constructor(props) {
    super(props);
    this.calculateMonthlySalary = this.calculateMonthlySalary.bind(this);
    this.calculateWeeklySalary = this.calculateWeeklySalary.bind(this);
    this.calculateDailySalary = this.calculateDailySalary.bind(this);
    this.calculateHourlySalary = this.calculateHourlySalary.bind(this);
    this.editSalary = this.editSalary.bind(this);
    this.state = {
      newSalary: ''
    }
  }

  calculateMonthlySalary(salary){
    let monthlySalary = Math.floor(salary/12);
    return monthlySalary;
  };

  calculateWeeklySalary(salary){
    let weeklySalary = Math.floor(salary/52);
    return weeklySalary;
  }

  calculateDailySalary(salary){
    let dailySalary = Math.floor(salary/260);
    return dailySalary;
  }

  calculateHourlySalary(salary){
    let hourlySalary = Math.floor(salary/2080);
    return hourlySalary;
  }

  editSalary(salary){
    axios.patch('/users/:id', {salary: this.props.user.salary})
    .then((response) => {
      this.props.handleSalaryEdit(salary);
    })
    //connect with the database and update salary
  }

render(){
    return (
      <div className="Salary">
        <header classname="salaryheader"><p>Salary Breakdown</p></header>
        <div className="salarydisplay">
          <div>Your annual salary: $ {this.props.user.salary}</div>
          <div>Your monthly salary: $ {this.calculateMonthlySalary(this.props.user.salary)}</div>
          <div>Your weekly salary: $ {this.calculateWeeklySalary(this.props.user.salary)}</div>
          <div>Your daily salary: $ {this.calculateDailySalary(this.props.user.salary)}</div>
          <div>Your hourly salary: $ {this.calculateHourlySalary(this.props.user.salary)}</div>
          <input
            type="text"
            name="salary"
            placeholder="Enter Salary Here"
            className="salaryInput"
            value={this.state.newSalary}
            onChange={event => this.setState({newSalary:event.target.value})} />
          <button onClick={ (ev) => {this.editSalary(ev)} }>Edit Salary</button>
        </div>
      </div>
    )
  }
}

export default Salary;
