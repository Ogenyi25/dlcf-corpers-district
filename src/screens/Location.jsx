import React from 'react';
import Navbar from '../component/nav/Navbar';
import Footer from '../component/Footer';


const Location = () => {
    return (
        <div className="location-page">
            <Navbar />
            <div className="location-welcome">
                <div className="location-title">Our Location</div>
                <div className="location-address"><i className="fa fa-map-marker" aria-hidden="true" />Victory kiddies academy,
                behind matrix fuel station, one man village. karu local government, nasarawa state</div>
            </div>
            <div className="location-sections">
                <div className="title">other dlcf location in the region</div>
                <div className="row container-fluid">
                    <div className="location col-md-3">
                        <div className="container">
                            <div className="front side">
                                <div className="content">
                                    <div className="div">CITY COLLEGE OF EDUCATION</div>
                                    <p className="p">
			                        </p>
                                </div>
                            </div>
                            <div className="back side">
                                <div className="content">
                                    <div className="venue"><i className="fa fa-map-marker" aria-hidden="true" />Location: This is the location of the venue</div>
                                    <div className="contact"><i className="fa fa-phone" aria-hidden="true" />Contact: This is the contact of the fellowship</div>
		                        </div>
                            </div>

                        </div>
                    </div>
                    <div className="location col-md-3">
                    <div className="container">
                            <div className="front side">
                                <div className="content">
                                    <div className="div">CITY COLLEGE OF EDUCATION</div>
                                    <p className="p">
			                        </p>
                                </div>
                            </div>
                            <div className="back side">
                                <div className="content">
                                    <div className="venue"><i className="fa fa-map-marker" aria-hidden="true" />Location: This is the location of the venue</div>
                                    <div className="contact"><i className="fa fa-phone" aria-hidden="true" />Contact: This is the contact of the fellowship</div>
		                        </div>
                            </div>

                        </div>
                    </div>
                    <div className="location col-md-3">
                    <div className="container">
                            <div className="front side">
                                <div className="content">
                                    <div className="div">CITY COLLEGE OF EDUCATION</div>
                                    <p className="p">
			                        </p>
                                </div>
                            </div>
                            <div className="back side">
                                <div className="content">
                                    <div className="venue"><i className="fa fa-map-marker" aria-hidden="true" />Location: This is the location of the venue</div>
                                    <div className="contact"><i className="fa fa-phone" aria-hidden="true" />Contact: This is the contact of the fellowship</div>
		                        </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Location;