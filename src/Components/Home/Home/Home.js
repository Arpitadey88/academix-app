import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Footer/>
        </div>
    );
};

export default Home;