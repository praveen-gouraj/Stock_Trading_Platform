import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';
import Navbar from '../Navbar';
import Footer from '../Footer';

function SupportPage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <CreateTicket/>
        <Footer/>
        </>
     );
}

export default SupportPage;