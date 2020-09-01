import React from 'react';
import Navbar from '../component/nav/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';


const Thursday =()=> {
    return (
        <div className="thursday-messages">
            <Navbar />
            <nav aria-label="breadcrumb" className="breadcrumb-container">
                <ol className="breadcrumb">
                    <Link to='/' className="breadcrumb-item"><i class="fa fa-home" aria-hidden="true"></i>Home</Link>
                    <Link to='/sermon' className="breadcrumb-item"><i class="fa fa-book" aria-hidden="true"></i>Sermon</Link>
                    <li className="breadcrumb-item active" aria-current="page">Thursday Messages</li>
                </ol>
            </nav>
            <div className="thursday-message-welcome">
                <div className="welcome-image">
                    <div className="title">
                        thursday revival hour and evangelism messages
                    </div>
                    <div className="body">
                        A time of revival, deliverance and miracles.
                    </div>
                    <div className="category"><i className="fa fa-tags" aria-hidden="true" />category: Revival, Evangelism</div>
                    <div className="time"><i className="fa fa-clock-o" aria-hidden="true" />Time: 6:00pm </div>
                </div>
            </div>

            <div className="house row container-fluid">
                    <div className="sect col-md-3">
                        <img className="card-img-top" src={require("../asset/images/adia.jpg")} alt="" />
                        <h6 className="lead">Topic: This is the topic of the message.</h6>
                        <div className="preacher"><i className="fa fa-user" aria-hidden="true" />Minister: Name of the preacher.</div>
                        <div className="catergory"><i className="fa fa-tags" aria-hidden="true" />Category: Message category.</div>
                        <div className="card-body">
                            <audio controls className="audio" src={require("../asset/audios/adia.mp3")}></audio>
                        </div>
                    </div>

                    <div className="sect col-md-3">
                        <img className="card-img-top" src={require("../asset/images/adia.jpg")} alt="" />
                        <h6 className="lead">Topic: This is the topic of the message.</h6>
                        <div className="preacher"><i className="fa fa-user" aria-hidden="true" />Minister: Name of the preacher.</div>
                        <div className="catergory"><i className="fa fa-tags" aria-hidden="true" />Category: Message category.</div>
                        <div className="card-body">
                            <audio controls className="audio" src={require("../asset/audios/adia.mp3")}></audio>
                        </div>
                    </div>

                    <div className="sect col-md-3">
                        <img className="card-img-top" src={require("../asset/images/adia.jpg")} alt="" />
                        <h6 className="lead">Topic: This is the topic of the message.</h6>
                        <div className="preacher"><i className="fa fa-user" aria-hidden="true" />Minister: Name of the preacher.</div>
                        <div className="catergory"><i className="fa fa-tags" aria-hidden="true" />Category: Message category.</div>
                        <div className="card-body">
                            <audio controls className="audio" src={require("../asset/audios/adia.mp3")}></audio>
                        </div>
                    </div>

                    <div className="sect col-md-3">
                        <img className="card-img-top" src={require("../asset/images/adia.jpg")} alt="" />
                        <h6 className="lead">Topic: This is the topic of the message.</h6>
                        <h6 className="preacher"><i className="fa fa-user" aria-hidden="true" />Minister: Name of the preacher.</h6>
                        <h6 className="catergory"><i className="fa fa-tags" aria-hidden="true" />Category: Message category.</h6>
                        <div className="card-body">
                            <audio controls className="audio" src={require("../asset/audios/adia.mp3")}></audio>
                        </div>
                    </div>
                </div>
                <Footer />
        </div>
    )
}


export default Thursday;