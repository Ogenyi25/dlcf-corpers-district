import React from 'react';
import Navbar from '../component/nav/Navbar';
import { Link } from 'react-router-dom';


const Songs =()=> {
    return (
        <div className="songs">
            <Navbar />
            <nav aria-label="breadcrumb" className="breadcrumb-container">
                <ol className="breadcrumb">
                    <Link to='/' className="breadcrumb-item"><i class="fa fa-home" aria-hidden="true"></i>Home</Link>
                    <Link to='/sermon' className="breadcrumb-item"><i class="fa fa-book" aria-hidden="true"></i>Sermon</Link>
                    <li className="breadcrumb-item active" aria-current="page">Choir Songs</li>
                </ol>
            </nav>
            <div className="songs-welcome">
                <div className="welcome-image">
                    <div className="title">
                        choir ministrations, singspiration and concert.
                    </div>
                    <div className="body">
                        soul lifting, spirit feeling songs
                    </div>
                    <div className="category"><i className="fa fa-tags" aria-hidden="true" />category: Praises, Worship</div>
                    <div className="time"><i className="fa fa-clock-o" aria-hidden="true" />Time: </div>
                </div>
            </div>
        </div>
    )
}


export default Songs;