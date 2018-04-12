import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

const VariableBuckets = () => {
  return (
    <div>
      <h2>Variable Buckets</h2>
      <TextField floatingLabelText="Type" type="text" />
      <br />
      <TextField floatingLabelText="Percent" type="number" postfix="%" />
      <br />
      <TextField floatingLabelText="Amount Leftover" type="number" />
      <br />
      <FlatButton
        style={{ marginTop: "10px", marginLeft: "0" }}
        label="Add New Variable Bucket"
        primary={true}
      />
    </div>
  );
};

export default VariableBuckets;
