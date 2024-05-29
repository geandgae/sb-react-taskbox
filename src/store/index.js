// import { createStore } from "redux";
// import rootReducer from "../reducers/index";

// const store = createStore(rootReducer);

// export default store;



import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


const store = createStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);