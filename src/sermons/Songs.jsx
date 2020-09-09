import React from 'react';
import Navbar from '../component/nav/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';


const Songs = () => {
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

            <div className="house row container-fluid">
                <div className="sect col-md-3">
                    <img className="card-img-top" src={require("../asset/images/adia.jpg")} alt="" />
                    <h6 className="lead">Title: This is the title of the song.</h6>
                    <div className="preacher"><i className="fa fa-user" aria-hidden="true" />Choir: Corpers District Choir.</div>
                    <div className="catergory"><i className="fa fa-tags" aria-hidden="true" />Category: Song category.</div>
                    <div className="icons">
                        <i class="fa fa-cloud-download" aria-hidden="true"></i>
                        <i class="fa fa-headphones" aria-hidden="true"></i>
                        <i class="fa fa-file" aria-hidden="true"></i>
                    </div>
                    <div className="card-body">
                        <audio controls className="audio" src={require("../asset/audios/adia.mp3")}></audio>
                    </div>
                </div>

                <div className="sect col-md-3">
                    <img className="card-img-top" src={require("../asset/images/adia.jpg")} alt="" />
                    <h6 className="lead">Title: This is the title of the song.</h6>
                    <div className="preacher"><i className="fa fa-user" aria-hidden="true" />Choirs: Corpers District Choir.</div>
                    <div className="catergory"><i className="fa fa-tags" aria-hidden="true" />Category: Song category.</div>
                    <div className="icons">
                        <i class="fa fa-cloud-download" aria-hidden="true"></i>
                        <i class="fa fa-headphones" aria-hidden="true"></i>
                        <i class="fa fa-file" aria-hidden="true"></i>
                    </div>
                    <div className="card-body">
                        <audio controls className="audio" src={require("../asset/audios/adia.mp3")}></audio>
                    </div>
                </div>

                <div className="sect col-md-3">
                    <img className="card-img-top" src={require("../asset/images/adia.jpg")} alt="" />
                    <h6 className="lead">Title: This is the title of the song.</h6>
                    <div className="preacher"><i className="fa fa-user" aria-hidden="true" />Choir: Corpers District Choir.</div>
                    <div className="catergory"><i className="fa fa-tags" aria-hidden="true" />Category: Song category.</div>
                    <div className="icons">
                        <i class="fa fa-cloud-download" aria-hidden="true"></i>
                        <i class="fa fa-headphones" aria-hidden="true"></i>
                        <i class="fa fa-file" aria-hidden="true"></i>
                    </div>
                    <div className="card-body">
                        <audio controls className="audio" src={require("../asset/audios/adia.mp3")}></audio>
                    </div>
                </div>

                <div className="sect col-md-3">
                    <img className="card-img-top" src={require("../asset/images/adia.jpg")} alt="" />
                    <h6 className="lead">Title: This is the title of the song.</h6>
                    <h6 className="preacher"><i className="fa fa-user" aria-hidden="true" />Choir: Corpers District Choir.</h6>
                    <h6 className="catergory"><i className="fa fa-tags" aria-hidden="true" />Category: Message category.</h6>
                    <div className="icons">
                        <i class="fa fa-cloud-download" aria-hidden="true"></i>
                        <i class="fa fa-headphones" aria-hidden="true"></i>
                        <i class="fa fa-file" aria-hidden="true"></i>
                    </div>
                    <div className="card-body">
                        <audio controls className="audio" src={require("../asset/audios/adia.mp3")}></audio>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Songs;