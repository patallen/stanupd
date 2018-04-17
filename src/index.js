import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
// import firebase from "firebase";
import App from "./App";
import combinedReducer from "./reducers/index";
import "firebase/firestore";
import "./index.css";

// const firebaseConfig = {
//   apiKey: "AIzaSyAFSMFfsVCvMNDl0TEjGfu9DvXFWdrSiII",
//   authDomain: "rule-based-data-analysis.firebaseapp.com",
//   databaseURL: "https://rule-based-data-analysis.firebaseio.com",
//   projectId: "rule-based-data-analysis",
//   storageBucket: "",
//   messagingSenderId: "971422160621"
// };
//
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// window.db = db;
const composed = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(combinedReducer, composed);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
