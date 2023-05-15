
import React from "react";
import PropTypes from "prop-types";

//create your first component
const Jumbotron = (props) => {

    return (
        <div className="container mt-3">
            <div className="mb-4 p-4 bg-body-tertiary rounded-3 bg-light jumbocolor">
                <div className="container-fluid py-5 p-0">
                    <h1 className="display-5 fw-bold">{props.headerText}</h1>
                    <p className="fs-4">{props.mainText}</p>
                    <button className="btn btn-primary btn-lg" type="button">{props.buttonText}</button>
                </div>
            </div>
        </div>

    );
};

Jumbotron.propTypes = {
    headerText: PropTypes.string,
    mainText: PropTypes.string,
    buttonText: PropTypes.string,
}

export default Jumbotron;