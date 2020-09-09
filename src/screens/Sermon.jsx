import React from 'react';
import Navbar from '../component/nav/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';


const Sermon = () => {
    return (
        <div className="sermon-page">
            <Navbar />
            <div className="sermon-welcome">
                <div className="sermon-title">SERMONS</div>
                <div className="sermon-motto">God's word is sharper than 2-edged sword</div>
            </div>

            <div className="sermon-outline">
                <div>
                    <div className="title">start a new way of living</div>
                    <div className="body">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassin.
                    </div>
                </div>
            </div>
            <div className="row sermon-section container-fluid">
                <div className="row sunday-section container-fluid">
                    <div className="row sunday-section-bg container-fluid">
                        <div className="col-md-4 image">
                            <img src={require('../asset/images/23.jpg')} alt="" className="sunday-image" />
                        </div>
                        <div className="col-md-6 sunday-text">
                            <h3 className="sunday-text-heading">Sunday devotional worship service messages.</h3>
                            <p className="category"><i className="fa fa-tags" aria-hidden="true" />category: Worship, Christian Living</p>
                            <p className="time"><i className="fa fa-clock-o" aria-hidden="true" />Time: 8:00am </p>
                            <div className="button">
                                <Link to='/sunday-message' className="btn btn-success">Get Messages</Link>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="row sunday-section container-fluid">
                    <div className="row sunday-section-bg container-fluid">
                        <div className="col-md-4 image">
                            <img src={require('../asset/images/23.jpg')} alt="" className="sunday-image" />
                        </div>
                        <div className="col-md-6 sunday-text">
                            <h3 className="sunday-text-heading">thursday revival hour and evangelism messages.</h3>
                            <p className="category"><i className="fa fa-tags" aria-hidden="true" />category: Revival, Evangelism.</p>
                            <p className="time"><i className="fa fa-clock-o" aria-hidden="true" />Time: 6:00pm </p>
                            <div className="button">
                            <Link to='/thursday-message' className="btn btn-success">Get Messages</Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row sunday-section container-fluid">
                    <div className="row sunday-section-bg container-fluid">
                        <div className="col-md-4 image">
                            <img src={require('../asset/images/23.jpg')} alt="" className="sunday-image" />
                        </div>
                        <div className="col-md-6 sunday-text">
                            <h3 className="sunday-text-heading">Choir Ministrations, Signspiration and Concerts.</h3>
                            <p className="category"><i className="fa fa-tags" aria-hidden="true" />category: Praises, Worships.</p>
                            <p className="time"><i className="fa fa-clock-o" aria-hidden="true" />Time: </p>
                            <div className="button">
                            <Link to='/choir-songs' className="btn btn-success">Get Messages</Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row sunday-section container-fluid">
                    <div className="row sunday-section-bg container-fluid">
                        <div className="col-md-4 image">
                            <img src={require('../asset/images/23.jpg')} alt="" className="sunday-image" />
                        </div>
                        <div className="col-md-6 sunday-text">
                            <h3 className="sunday-text-heading">special seminar sessions on contemporary issues.</h3>
                            <p className="category"><i className="fa fa-tags" aria-hidden="true" />category: Marriage, Youthful exhuberrance,.</p>
                            <p className="time"><i className="fa fa-clock-o" aria-hidden="true" />Time: Special Services </p>
                            <div className="button">
                            <Link to='/special-series' className="btn btn-success">Get Messages</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sermon;