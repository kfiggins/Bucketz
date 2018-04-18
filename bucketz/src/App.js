import React, { Component } from "react";
import logo from "./blueBucket.png";
import "./App.css";
import Income from "./Containers/Income";
import FixedCosts from "./Containers/FixedCosts";
import VariableBuckets from "./Components/VariableBuckets";
import Expenses from "./Components/Expenses";
// import { Tabs, Tab } from "material-ui/Tabs";
import BudgetHistory from "./Containers/BudgetHistory";

class App extends Component {
  render() {
    const styles = {};

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bucketz</h1>
        </header>
        <div>
          <BudgetHistory />
        </div>
        {/* <Tabs> */}
        {/* <Tab label="Income"> */}
        <div>
          <Income />
        </div>
        {/* </Tab>
          <Tab label="Fixed Costs"> */}
        <div>
          <FixedCosts />
        </div>
        {/* </Tab>
          <Tab
            label="Variable Buckets"
            // data-route="/home"
            // onActive={handleActive}
          > */}
        <VariableBuckets />
        {/* </Tab>
          <Tab label="Expenses"> */}
        <div>
          <Expenses />
        </div>
        {/* </Tab>
        </Tabs> */}
      </div>
    );
  }
}

export default App;
