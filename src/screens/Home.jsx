import React from 'react';
import Navbar from '../component/Navbar';

import About from '../component/About';
import Welcome from '../component/Welcome';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
                <div>
                    <Welcome />
                </div>
           <div className="about">
                <About />
           </div>
            
        </div>
    )
}


export default Home;