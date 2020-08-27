import React from 'react';
import { Link } from 'react-router-dom';


const Footer =()=> {
    return (
        <div className="footer-section">
            <div className="row news-letter-section container-fluid">
                <div className="col-md-6">
                    <div className="title">Subscribe to our newsletter</div>
                    <div className="body">Enter your email address and subscribe to get important information</div>
                </div>
                <div className="col-md-6">
                    <div className="subscribe-form text-right">
                        <form action="#">
                            <input type="email" name="subscribe-email" id="subscribeEmail" placeholder="Your Email" />
                            <button type="submit" className="btn crose-btn">subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row footer-items container-fluid">
                <div className="col-md-4">
                    <div className="site-logo">
                        <img src={require('../asset/images/logo.png')} alt=""/>
                        DLCF Corpers District
                    </div>
                    <div className="site-logo-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="quick-links">
                        <div className="title">Quick Links</div>
                        <div className="links">
                            <Link to='/home' className="nav-links">Home</Link>
                            <Link to='/sermon' className="nav-links">Sermons</Link>
                            <Link to='/event' className="nav-links">Our Events</Link>
                            <Link to='/location' className="nav-links">Our Locations</Link>
                            <Link to='/contact' className="nav-links">Contact Us</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-3">
                    <div className="contact-us">
                        <div className="title">Contact Us</div>
                        <div className="contact-options">
                            <div className="location"><i className="fa fa-map-marker" aria-hidden="true" />
                                victory kiddies academy, behind matrix fuel station, koroduma, one man village, nasarawa state.
                            </div>
                            <div className="location"><i className="fa fa-phone" aria-hidden="true" />
                                08134756623, 09081046069
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-text">
                    Copyright ©2020 All rights reserved | Created and owned by <strong>DLCF Corpers District</strong>
                </div>
            </div>
        </div>
    )
}

export default Footer;