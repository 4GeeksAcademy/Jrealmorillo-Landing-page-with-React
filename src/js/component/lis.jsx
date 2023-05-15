import PropTypes from "prop-types";
import React from "react";

const Lis = (props) =>{
    return(
        <li className="nav-item">
            <a className={`nav-link ${props.style}`} aria-current="page" href="#">{props.text}</a>
        </li>
    );
    
}
Lis.propTypes = {
	style: PropTypes.string,
	text: PropTypes.string
};

export default Lis;