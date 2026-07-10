import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Invest in stocks, mutual funds, ETFs, and more with ease. Start your investment journey today and watch your wealth grow.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now </button>
            </div>
        </div>
     );
}

export default Hero;