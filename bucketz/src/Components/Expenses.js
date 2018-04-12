import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import DatePicker from "material-ui/DatePicker";

export default class Expenses extends Component {
  state = {
    value: 1
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <h2>Add New Expense</h2>
        {/* TODO: This needs to contain a list of Variable */}
        <DatePicker floatingLabelText="Expense Date" />
        <br />
        <SelectField
          floatingLabelText="Variable Bucket"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Food/Hygene" />
          <MenuItem value={2} primaryText="Gas" />
          <MenuItem value={3} primaryText="Clothes" />
          <MenuItem value={4} primaryText="Entertainment" />
          <MenuItem value={5} primaryText="Medical" />
        </SelectField>
        <br />
        <TextField floatingLabelText="Amount" type="number" />
        <br />
        <TextField floatingLabelText="Note" type="text" />
        <br />
        <FlatButton
          style={{ marginTop: "10px", marginLeft: "0" }}
          label="Add Expense"
          primary={true}
        />
      </div>
    );
  }
}
