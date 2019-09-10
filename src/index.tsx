import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactModal from "react-modal";

// To fix react-modal's 'App element is not defined.' error
// https://github.com/reactjs/react-modal/issues/576#issuecomment-394116847
ReactModal.setAppElement("body");

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
