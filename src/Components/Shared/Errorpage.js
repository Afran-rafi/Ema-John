import React from 'react';
import error from '../Images/Error.png'

const Errorpage = () => {
    return (
        <div>
            <h2 className='text-4xl text-center mt-6 text-[#FF9900] font-bold'>Sorry! Page Not Found</h2>
            <div className='flex justify-center'>
                <img className=' h-[70vh]' src={error} alt="" />
            </div>
        </div>
    );
};

export default Errorpage;