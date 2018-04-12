import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import DatePicker from "material-ui/DatePicker";

const Income = () => {
  return (
    <div>
      <h2 style={{ marginBottom: "0" }}>Income</h2>
      <DatePicker floatingLabelText="Pay Date" />
      <TextField floatingLabelText="Gross Income" type="number" />
      <br />
      <TextField floatingLabelText="Net Income" type="number" />
      <br />
      <FlatButton
        style={{ marginTop: "10px", marginLeft: "0" }}
        label="Submit"
        primary={true}
      />
    </div>
  );
};

export default Income;
