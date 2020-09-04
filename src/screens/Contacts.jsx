import React from 'react';
import Navbar from '../component/nav/Navbar';
import Footer from '../component/Footer';


const Contacts = () => {
    return (
        <div className="contacts-page">
            <Navbar />
            <div className="contact-map">
                <div className="map mb-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.411617306573!2d7.61085116427648!3d9.0261633915199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0601dc37f58d%3A0xa208dac46aa927cd!2sMararaba%20General%20Hospital%2C%20New%20Karu!5e0!3m2!1sen!2sng!4v1592424330091!5m2!1sen!2sng"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div className="row container-fluid contact-section">
                <div className="col-md-3 contact">
                    <div className="title"><i className="fa fa-phone" aria-hidden="true" />Contacts</div>
                    <div className="email">info.dlcfcorpersdistrict@gmail.com</div>
                    <div className="phone">08134756623, 08134756623</div>
                </div>

                <div className="col-md-3 contact">
                    <div className="title"><i className="fa fa-map-marker" aria-hidden="true" />Address</div>
                    <div className="email">Victory kiddies academy, koroduma, karu local government,
                    Nasarawa state.
                    </div>
                </div>
                <div className="col-md-3 contact">
                    <div className="title"><i className="fa fa-clock-o" aria-hidden="true" />Opening hours</div>
                    <div className="email">info.dlcfcorpersdistrict@gmail.com</div>
                    <div className="phone">08134756623, 08134756623</div>
                </div>

            </div>
            <div className="message-us-section">
                <div className="title">leave us a message</div>
                <form action="submit" className="contact-details">
                    <div className="row container-fluid">
                        <div className="col-lg-6">
                            <input type="text" className="form-control form-input" name="name" placeholder="Full Name" required />
                        </div>
                        <div className="col-lg-6">
                            <input type="number" className="form-control form-input" name="phonenumber" placeholder="Phone Number"
                            required />
                        </div>
                        <div className="col-12">
                            <input type="email" className="form-control form-input" name="email" placeholder="Email Address"
                            required />
                        </div>
                        <div className="col-12">
                            <textarea name="message" className="form-control form-input" cols="30" rows="10"
                                placeholder="Your Message" required>
                            </textarea>
                        </div>
                        <div className="button">
                            <button type="submit" className="btn">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}


export default Contacts;