import React from "react";
import { connect } from "react-redux";

const mapStateToProps = function(state) {
  return {
    payPeriods: state.payPeriods
  };
};

const BudgetHistory = ({ payPeriods }) => {
  return (
    <div>
      <ul>
        {payPeriods.map(payPeriod => (
          <li key={payPeriod.id}>
            PayDate: {payPeriod.payDate} Gross: {payPeriod.gross} Net:{" "}
            {payPeriod.net}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(BudgetHistory);
