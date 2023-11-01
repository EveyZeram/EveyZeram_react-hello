//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import 'boostrap';

//import your own components
// import Home from "./component/home.jsx";

function SimpleCounter(props){
    return (<p>Hello World</p>)
}


//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
