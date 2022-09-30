import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";

ReactGA.pageview("/");
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
