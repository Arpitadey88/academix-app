import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import TopStudents from '../TopStudents/TopStudents';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <TopStudents id="top-students"/>
            <About id="about"/>
            <Footer/>
        </div>
    );
};

export default Home;