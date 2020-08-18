import React from 'react';
import Navbar from '../component/nav/Navbar';
import { Link } from 'react-router-dom';


const Sermon = () => {
    return (
        <div className="sermon-page">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="sermon-welcome">
                <div className="sermon-title">SERMONS</div>
                <div className="sermon-motto">God's word is sharper than 2-edged sword</div>
            </div>
            <div className="row sermon-section container-fluid">
                <div className="sermon-cards col-md-3">
                    <div className="sunday">
                        <div className="sunday-heading">
                            sunday service messages
                        </div>
                        <div className="sunday-word">
                            Time of devotional sunday worship service
                        </div>
                        <Link to="/sunday-message" className="links">
                            <button className="btn">Get Message</button>
                        </Link>
                    </div>
                </div>

                <div className="sermon-cards col-md-3">
                    <div className="sunday">
                        <div className="sunday-heading">
                            thursday revival messages
                        </div>
                        <div className="sunday-word">
                            revival and evangelical training service
                        </div>
                        <Link to="/thursday-message" className="links">
                            <button className="btn">Get Message</button>
                        </Link>
                    </div>
                </div>

                <div className="sermon-cards col-md-3">
                    <div className="sunday">
                        <div className="sunday-heading">
                            special series and seminars
                        </div>
                        <div className="sunday-word">
                            special series on marraiges, and others
                        </div>
                        <Link to="/special-series" className="links">
                            <button className="btn">Get Series</button>
                        </Link>
                    </div>
                </div>

                <div className="sermon-cards col-md-3">
                    <div className="sunday">
                        <div className="sunday-heading">
                            choir songs and singspiration
                        </div>
                        <div className="sunday-word">
                            inspiring and soul lifting songs
                        </div>
                        <Link to="/choir-songs" className="links">
                            <button className="btn">Get Songs</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sermon;