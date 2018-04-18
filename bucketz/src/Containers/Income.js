import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import DatePicker from "material-ui/DatePicker";
import { connect } from "react-redux";
import { addIncome } from "../Actions";

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gross: "",
      net: "",
      payDate: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleDateChange(event, date) {
    console.log(date);
    this.setState({
      payDate: date
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            const income = {
              gross: this.state.gross,
              net: this.state.net,
              payDate: this.state.payDate.toString()
            };
            this.props.dispatch(addIncome(income));
          }}
        >
          <h2 style={{ marginBottom: "0" }}>Income</h2>
          <br />
          <DatePicker
            name="payDate"
            value={this.state.payDate}
            onChange={this.handleDateChange}
            floatingLabelText="Pay Date"
          />
          <TextField
            floatingLabelText="Gross Income"
            type="number"
            name="gross"
            value={this.state.gross}
            onChange={this.handleInputChange}
          />
          <br />
          <TextField
            floatingLabelText="Net Income"
            value={this.state.net}
            name="net"
            onChange={this.handleInputChange}
            type="number"
          />
          <br />
          <FlatButton
            type="submit"
            style={{ marginTop: "10px", marginLeft: "0" }}
            label="Add Income"
            primary={true}
          />
        </form>
      </div>
    );
  }
}

export default connect()(Income);
