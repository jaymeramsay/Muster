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
    console.log('inside editSalary');
    axios.patch(`/users/${this.props.user.id}`, {salary: salary})
    .then((response) => {
      this.props.handleSalaryEdit(salary);
    })
    //connect with the database and update salary
  }

render(){
  let funds = this.props.user.salary;
    return (
      <div className="Salary">

        <div className="salaryheader">
          <div className="salarytitle">Salary Breakdown</div>
        </div>

        <div className="salaryContainer">

          <div className="salarydisplay">
            <div className="salaryOutputs"> Annual income: $ {funds}</div>
            <div className="salaryOutputs"> Monthly income: $ {this.calculateMonthlySalary(funds)}</div>
            <div className="salaryOutputs"> Weekly income: $ {this.calculateWeeklySalary(funds)}</div>
            <div className="salaryOutputs"> Daily income: $ {this.calculateDailySalary(funds)}</div>
            <div className="salaryOutputs"> Hourly income: $ {this.calculateHourlySalary(funds)}</div>
          </div>

          <div className="salaryedit">
              <input
                type="text"
                name="salary"
                placeholder="Enter Salary Here"
                className="salaryInput"
                value={this.state.newSalary}
                onChange={event => {this.setState({newSalary:event.target.value})} }/>
              <button className="salaryButton" onClick={ () => {this.editSalary(this.state.newSalary)} }>Edit Salary</button>
          </div>

        </div>
      </div>
      )
    }
};

export default Salary;
