import React from 'react';
import Navbar from '../component/nav/Navbar';
import { Link } from 'react-router-dom';


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
        </div>
    )
}


export default Thursday;