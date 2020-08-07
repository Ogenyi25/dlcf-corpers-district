import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {

   
    return (
        <div className="navbar container-fluid" id="navbar">
            <nav class="navbar sticky navbar-expand-lg navbar-light bg-dark row container-fluid">
                <div className="col-md-3 container-fluid">
                    <div className="image">
                        <img className="img" src={require("../asset/images/logo2.png")} alt="" />
                    </div>
                    <Link to='/home' className="navbar-brand">DLCF <strong>Corpers District</strong></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="col-md-6 navlinks-section">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <Link to='/home' className="nav-link">Home</Link>
                            <Link to='/sermon' className="nav-link" >Sermons</Link>
                            <Link to='/event' className="nav-link" >Events</Link>
                            <Link to='/location' className="nav-link" >Locations</Link>
                            <Link to='/contact' className="nav-link" >Contact</Link>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 contact-div">
                    <div className="numbers">Quick call: 08134756623, 09081046069</div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;