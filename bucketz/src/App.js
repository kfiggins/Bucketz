import React, { Component } from "react";
import logo from "./blueBucket.png";
import "./App.css";
// import Income from "./Containers/Income";
// import FixedCosts from "./Containers/FixedCosts";
// import VariableBuckets from "./Components/VariableBuckets";
// import Expenses from "./Components/Expenses";
// import { Tabs, Tab } from "material-ui/Tabs";
import BudgetHistory from "./Containers/BudgetHistory";
import BucketzForm from "./Containers/BucketzForm";

class App extends Component {
  render() {
    // const styles = {};

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bucketz</h1>
        </header>
        <div>
          <BudgetHistory />
        </div>
        <BucketzForm />
        {/* <div>
          <Income />
        </div>

        <div>
          <FixedCosts />
        </div>

        <VariableBuckets />

        <div>
          <Expenses />
        </div> */}
      </div>
    );
  }
}

export default App;
