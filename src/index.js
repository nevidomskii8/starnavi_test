import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import { store } from "./Redux/createStore.ts";
// import { store } from "./Redux/createStore";
import { Provider } from "react-redux";

// const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
