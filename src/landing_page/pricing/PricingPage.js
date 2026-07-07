import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import NaNvbar from '../Navbar';
import Footer from '../Footer';

function PricingPage() {
    return (   
        <>  
            <Navbar />
            <Hero />
            <Brokerage />
            <Footer />
        </>
     );
}

export default PricingPage;