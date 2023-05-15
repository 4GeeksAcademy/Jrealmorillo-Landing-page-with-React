import React from "react";
import Lis from "./lis.jsx";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container">
                <a className="navbar-brand navbarBrand" href="#">Start Boostrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <Lis text="Home" style="active"/>
                        <Lis text="About"/>
                        <Lis text="Services" />
                        <Lis text="Contact" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;