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

const Wrapper = () => {
  const initialState = {};

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
