//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


// include your styles into the webpack bundle
import "../styles/index.css";
import "bootstrap";


//import your own components
// import Home from "./component/home.jsx";


function SimpleCounter(props) {
    return (
        <>
            <div className="bigCounter">
                <div className="calendar">
                    <i className="fas fa-clock"></i>
                </div>
                <div className="six">{props.digitFour % 10}</div>
                <div className="five">{props.digitFour % 10}</div>
                <div className="four">{props.digitFour % 10}</div>
                <div className="three">{props.digitThree % 10}</div>
                <div className="two">{props.digitTwo % 10}</div>
                <div className="one">{props.digitOne % 10}</div>


            </div>
        </>
    )
};


SimpleCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
}


let counter = 0;
setInterval(function () {
    const six = Math.floor(counter / 100000);
    const five = Math.floor(counter / 10000);
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);

    console.log(six, five, four, three, two, one);
    //render your react application
    counter++;
    ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />, document.querySelector("#app"));
}, 1000);
