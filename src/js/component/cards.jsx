
import React from "react";
import PropTypes from "prop-types";


//create your first component
const Cards = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div className="card h-100" style={props.style}>
                <img src={props.cardImage} className="card-img-top" alt="cardImage"/>
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text ">{props.cardText}</p>
                </div>
                <div className="card-footer text-center">
                    <a className="btn btn-primary">{props.buttonText}</a>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    style : PropTypes.string,
    cardImage: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    buttonText: PropTypes.string,

}



export default Cards;