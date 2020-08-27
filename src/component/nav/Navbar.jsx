import React from 'react';
import Burger from './Burger';


const Navbar =()=> {
    return (
        <div className="navbar sticky">
            <div className="image">
                <img className="img" src={require("../../asset/images/logo2.png")} alt="" />
               DLCF Corpers District
            </div>
            <Burger />
        </div>
    )
}

export default Navbar;