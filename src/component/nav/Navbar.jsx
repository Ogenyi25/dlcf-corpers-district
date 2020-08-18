import React from 'react';
import Burger from './Burger';


const Navbar =()=> {
    return (
        <div className="navbar sticky">
            <div className="logo">
                DLCF Corpers District
            </div>
            <Burger />
        </div>
    )
}

export default Navbar;