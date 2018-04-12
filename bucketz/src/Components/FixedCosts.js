import React from "react";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

const FixedCosts = () => {
  return (
    <div>
      <h2>Fixed Costs</h2>
      <TextField floatingLabelText="Type" type="text" />
      <br />
      <TextField floatingLabelText="Amount" type="number" />
      <br />
      <FlatButton
        style={{ marginTop: "10px", marginLeft: "0" }}
        label="Add Fixed Cost"
        primary={true}
      />
    </div>
  );
};

export default FixedCosts;
