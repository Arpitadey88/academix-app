import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import TopStudents from '../TopStudents/TopStudents';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <TopStudents/>
            <Footer/>
        </div>
    );
};

export default Home;