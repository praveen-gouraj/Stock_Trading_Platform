import React from 'react';
import Hero from './Hero';
import Team from './Team';
import NaNvbar from '../Navbar';
import Footer from '../Footer';

function AboutPage() {
    return ( 
        <>  
            <NaNvbar />
            <Hero />
            <Team />
            <Footer />
        </>
     );
}

export default AboutPage;