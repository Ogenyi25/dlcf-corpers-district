import React from 'react';
import Video1 from '../asset/videos/video.mp4';


const Video = () => {
    return (
        <div className="background-video">
            <video src={Video1} type="video/mp4" playsinline autoplay muted loop className="bg-video">
            </video>
            <header class="viewport-header">
                <h1>
                    DEEPER LIFE CAMPUS FELLOWSHIP
                <span>Corpers District (Karu Region)</span>
                <span className="span">Your spiritual welfare is our concern</span>
                </h1>
            </header>
        </div>
    )
}

export default Video;