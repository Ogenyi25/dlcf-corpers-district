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
                            <p className="category">category: Worship, Christian Living</p>
                            <p className="time">Time: 8:00am </p>
                            <div className="button">
                                <button className="btn btn-success">Get Messages</button>
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
                            <h3 className="sunday-text-heading">Sunday devotional worship service messages.</h3>
                            <p className="category">category: Worship, Christian Living</p>
                            <p className="time">Time: 8:00am </p>
                            <div className="button">
                                <button className="btn btn-success">Get Messages</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sermon;