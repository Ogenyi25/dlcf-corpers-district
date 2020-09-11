import React from 'react';

const Welcome = () => {  
    return (
      <div className="welcome-page">
        <div className="background-image">
          <div className="church-name">Deeper Life Campus Fellowship</div>
          <div className="location">Corpers District (Karu Region)</div>
          <div className="motto">your spiritual welfare is our concern</div>
          <input type="text" className="search" placeholder="Search for messages, songs, e.t.c" />
          <button className="btn">Search</button>
          <div className="bible-passage">
            "For God so love the World that he gave his only begotten son
            that whosoever believeth on him should not perish but have everlasting
            life.
            (John 3:16)."
          </div>
        </div>
      </div>
       
    )
}


export default Welcome;