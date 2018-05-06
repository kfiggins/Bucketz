import React, { Component } from "react";
import { connect } from "react-redux";

import { addIncome } from "../Actions";

import Income from "./Income";
import FixedCosts from "./FixedCosts";
import VariableBuckets from "../Components/VariableBuckets";
import Expenses from "../Components/Expenses";

class BucketzForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      gross: "",
      net: "",
      payDate: {},
      fixedAmount: "",
      fixedType: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleIncomeSubmit = this.handleIncomeSubmit.bind(this);
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleDateChange = (event, date) => {
    console.log(date);
    this.setState({
      payDate: date
    });
  };

  handleIncomeSubmit = e => {
    e.preventDefault();
    const income = {
      gross: this.state.gross,
      net: this.state.net,
      payDate: this.state.payDate.toString()
    };
    this.props.dispatch(addIncome(income));
  };

  render() {
    return (
      <div>
        <Income
          handleInputChange={this.handleInputChange.bind(this)}
          handleDateChange={this.handleDateChange.bind(this)}
          handleIncomeSubmit={this.handleIncomeSubmit.bind(this)}
          gross={this.state.gross}
          net={this.state.net}
          payDate={this.state.payDate}
        />
        <FixedCosts />
        <VariableBuckets />
        <Expenses />
      </div>
    );
  }
}

export default connect()(BucketzForm);
