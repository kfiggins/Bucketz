import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import DatePicker from "material-ui/DatePicker";

const Income = props => {
  console.log(props);
  // const {
  //   handleIncomeSubmit,
  //   handleDateChange,
  //   handleInputChange,
  //   gross,
  //   net,
  //   payDate
  // } = this.props;
  return (
    <div>
      <form onSubmit={this.props.handleIncomeSubmit}>
        <h2 style={{ marginBottom: "0" }}>Income</h2>
        <br />
        <DatePicker
          name="payDate"
          value={this.props.payDate}
          onChange={this.props.handleDateChange}
          floatingLabelText="Pay Date"
        />
        <TextField
          floatingLabelText="Gross Income"
          type="number"
          name="gross"
          value={this.props.gross}
          onChange={this.props.handleInputChange}
        />
        <br />
        <TextField
          floatingLabelText="Net Income"
          value={this.props.net}
          name="net"
          onChange={this.props.handleInputChange}
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
};

export default Income;
