import React from 'react';
import About from '../component/About';
import Welcome from '../component/Welcome';
import Navbar from '../component/nav/Navbar';
import Footer from '../component/Footer';

const Home = () => {
    return (
        <div className="home">
            <div>
                <Navbar />
            </div>
            <div>
                <Welcome />
            </div>
           <div className="about">
                <About />
           </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}


export default Home;