import React from 'react';
import Navbar from '../Navbar';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Footer from '../Footer';

function ProductsPage() {
    return ( 
        <>
            <Navbar />
            <LeftSection />
            <RightSection />
            <Universe />
            <Footer/>
        </>
     );
}

export default ProductsPage;