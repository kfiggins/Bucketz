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
        <h2>Pay Periods</h2>
        {payPeriods.map(payPeriod => (
          <div>
            <h3>Pay Period</h3>
            <li key={payPeriod.id}>
              PayDate: {payPeriod.payDate} Gross: {payPeriod.gross} Net:{" "}
              {payPeriod.net}.
              <h4>Fixed Costs</h4>
              {payPeriod.fixedCosts.map(fc => (
                <div>
                  Name: {fc.type} Amount {fc.amount}
                </div>
              ))}
              <h4>Buckets</h4>
              {payPeriod.variableBuckets.map(vb => (
                <div>
                  Name: {vb.name} Amount {vb.currentAmount}
                </div>
              ))}
              <h4>Expenses</h4>
              {payPeriod.expenses.map(exp => (
                <div>
                  Name: {exp.note} Amount {exp.amount}
                </div>
              ))}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(BudgetHistory);
