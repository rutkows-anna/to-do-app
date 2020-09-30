import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqX0NLqBomHbVxppsvUju6myikZ7zJpqU",
  authDomain: "todoapp-36408.firebaseapp.com",
  databaseURL: "https://todoapp-36408.firebaseio.com",
  projectId: "todoapp-36408",
  storageBucket: "todoapp-36408.appspot.com",
  messagingSenderId: "20656447326",
  appId: "1:20656447326:web:a8975420dab8f64293b9cf",
};

export const DATABASE_URL = firebaseConfig.databaseURL;
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
