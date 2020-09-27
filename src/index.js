import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1BMryuc2oO_HKgFwhwUCSS4nAHRINpV0",
  authDomain: "test-f0a98.firebaseapp.com",
  databaseURL: "https://test-f0a98.firebaseio.com",
  projectId: "test-f0a98",
  storageBucket: "test-f0a98.appspot.com",
  messagingSenderId: "378065021114",
  appId: "1:378065021114:web:d53eb6c0e37dc4b271ba83"
};

export const DATABASE_URL = firebaseConfig.databaseURL;
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
