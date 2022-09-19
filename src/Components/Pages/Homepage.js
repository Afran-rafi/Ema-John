import React from 'react';
import '../CSS/Homepage.css'
import img from '../Images/ema-john.png'

const Homepage = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 items-center h-screen'>
            <div className='reverse'>
                <h5 className='text-xs text-[#FF9900] font-bold'>sale up to 70% off</h5>
                <h2 className='text-4xl'>New Collection For Fall!!</h2>
                <p className=''>Discover all the new arrivals of ready-to-wear collection.</p>
                <button className='bg-[#FF9900] px-4 py-1 text-white rounded mt-4'>Shop Now</button>
            </div>
            <div>
                <div className='flex justify-center mt-20'>
                    <img className='image' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;