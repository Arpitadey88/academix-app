import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import TopStudents from '../TopStudents/TopStudents';
import About from '../About/About';
import CallToAction from '../CallToAction/CallToAction';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <TopStudents id="top-students"/>
            <About id="about"/>
            <CallToAction id="contacts"/>
            <Footer/>
        </div>
    );
};

export default Home;