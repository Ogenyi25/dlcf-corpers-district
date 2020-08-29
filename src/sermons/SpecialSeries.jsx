import React from 'react';
import Navbar from '../component/nav/Navbar';
import { Link } from 'react-router-dom';



const SpecialSeries =()=> {
    return (
        <div className="special-series">
            <Navbar />
            <nav aria-label="breadcrumb" className="breadcrumb-container">
                <ol className="breadcrumb">
                    <Link to='/' className="breadcrumb-item"><i class="fa fa-home" aria-hidden="true"></i>Home</Link>
                    <Link to='/sermon' className="breadcrumb-item"><i class="fa fa-book" aria-hidden="true"></i>Sermon</Link>
                    <li className="breadcrumb-item active" aria-current="page">Special Series</li>
                </ol>
            </nav>
            <div className="special-series-welcome">
                <div className="welcome-image">
                    <div className="title">
                        Special seminars on contemporary issues
                    </div>
                    <div className="body">
                        enabling christians to stand firm and live holy
                    </div>
                    <div className="category"><i className="fa fa-tags" aria-hidden="true" />category: Christian Living</div>
                    <div className="time"><i className="fa fa-clock-o" aria-hidden="true" />Time: </div>
                </div>
            </div>
        </div>
    )
}


export default SpecialSeries;