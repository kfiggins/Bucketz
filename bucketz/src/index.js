import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import rootReducer from "./Reducers";
import income from "./Reducers/income";

const payPeriods = [
  {
    id: 500,
    gross: 500,
    net: 30,
    payDate: "2/7/2018",
    fixedCosts: [{ fixedCostId: 1, name: "Rent", amount: 450 }],
    variableBuckets: [
      {
        bucketId: 1,
        name: "Food and Hygene",
        currentAmount: 667,
        amountFromIncome: 500,
        amountLeftOver: 167
      }
    ],
    expenses: [
      { expenseId: 1, note: "Mcdonalds", amount: 13.37, date: "2/7/2018" }
    ]
  }
];

const Wrapper = () => {
  const initialState = { payPeriods };

  const store = createStore(
    income,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
registerServiceWorker();
