import React from 'react';
import Navbar from './Navbar';

const Welcome = () => {  
    return (
      <div className="welcome-page">
        <div className="navbar">
          <Navbar />
        </div>
         <div className="background-image">
          <div className="church-name">Deeper Life Campus Fellowship</div>
          <div className="location">Corpers District (Karu Region)</div>
          <div className="motto">your spiritual is our concern</div>
        </div>
      </div>
       
    )
}


export default Welcome;