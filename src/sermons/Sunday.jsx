import React from 'react';
import Navbar from '../component/nav/Navbar';
import { Link } from 'react-router-dom';


const SundayMessage = () => {
    return (
        <div className="sunday">
            <Navbar />
            <nav aria-label="breadcrumb" className="breadcrumb-container">
                <ol className="breadcrumb">
                    <Link to='/' className="breadcrumb-item"><i class="fa fa-home" aria-hidden="true"></i>Home</Link>
                    <Link to='/sermon' className="breadcrumb-item"><i class="fa fa-book" aria-hidden="true"></i>Sermon</Link>
                    <li className="breadcrumb-item active" aria-current="page">Sunday Messages</li>
                </ol>
            </nav>
            <div className="sunday-message-welcome">
                <div className="welcome-image">
                    <div className="title">
                        sunday worship services messsages
                    </div>
                    <div className="body">
                        A time of devotional worship service.
                    </div>
                    <div className="category"><i className="fa fa-tags" aria-hidden="true" />category: Worship, Christian Living</div>
                    <div className="time"><i className="fa fa-clock-o" aria-hidden="true" />Time: 8:00am </div>
                </div>
            </div>
        </div>
    )
}


export default SundayMessage;