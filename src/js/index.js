//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home";

//include your index.scss file into the bundle
import "../styles/index.scss";
import Game from "./component/Game";

//render your react application
ReactDOM.render(<Game />, document.querySelector("#app"));
