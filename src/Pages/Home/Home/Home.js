import React from 'react';
import AllPackages from '../../AllPackages/AllPackages';
import Contact from '../../Contact/Contact';
import Features from '../../Features/Features';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllPackages></AllPackages>
            <Features></Features>
            <Contact></Contact>
        </div>
    );
};

export default Home;