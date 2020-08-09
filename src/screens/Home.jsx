import React from 'react';
import About from '../component/About';
import Welcome from '../component/Welcome';

const Home = () => {
    return (
        <div className="home">
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