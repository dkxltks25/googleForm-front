import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./Component/App";
import rootReducer from "./reducer";

const midlewares = [];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...midlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
