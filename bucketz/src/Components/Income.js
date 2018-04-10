import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

const formStyle = {
  width: "100px"
};

const Income = () => {
  return (
    <div style={formStyle}>
      <TextField hintText="Gross Amount" />
      <TextField hintText="Net Amount" />
      <FlatButton label="Submit" primary={true} />
    </div>
  );
};

export default Income;
