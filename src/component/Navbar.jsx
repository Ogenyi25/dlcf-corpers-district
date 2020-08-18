import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';



const Navbar =()=> {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className="navbar">
                <Link to= '/' className="navbar-logo">
                    DLCF CorpersDistrict
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/home' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/sermon' className="nav-links" onClick={closeMobileMenu}>
                            Sermons <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                    <li className="nav-item">
                        <Link to='/event' className="nav-links" onClick={closeMobileMenu}>
                            Our Events
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/location' className="nav-links" onClick={closeMobileMenu}>
                            Our Locations
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;