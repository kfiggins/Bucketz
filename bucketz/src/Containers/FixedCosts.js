import React, { Component } from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import { connect } from "react-redux";
import { addFixedCost } from "../Actions/index";
import { uniqueId } from "lodash";

class FixedCosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      type: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name + " " + value);
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            const fixedCost = {
              fixedCostId: uniqueId(),
              type: this.state.type,
              amount: this.state.amount
            };
            this.props.dispatch(addFixedCost(fixedCost));
          }}
        >
          <h2>Fixed Costs</h2>
          <TextField
            floatingLabelText="Type"
            type="text"
            name="type"
            value={this.state.type}
            onChange={this.handleInputChange}
          />
          <br />
          <TextField
            floatingLabelText="Amount"
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleInputChange}
          />
          <br />
          <FlatButton
            type="submit"
            style={{ marginTop: "10px", marginLeft: "0" }}
            label="Add Fixed Cost"
            primary={true}
          />
        </form>
      </div>
    );
  }
}

export default connect()(FixedCosts);
