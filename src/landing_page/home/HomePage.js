import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
        <Navbar />
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
        </>
     );
}

export default HomePage;