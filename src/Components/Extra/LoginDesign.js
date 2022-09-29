import React from 'react';
import { Link } from 'react-router-dom';

const LoginDesign = () => {
    return (
        <div className='flex justify-center lg:my-6'>
            <div className='w-[380px] p-8 bg-gray-100 rounded'>
                <h1 className='text-center text-2xl font-bold'>Sign Up</h1>
                <div className='mt-6'>
                    <p>Name:</p>
                    <input className='w-full h-[40px] rounded b' type="text" name='' id='name' />
                </div>
                <div className='mt-4'>
                    <p>Email:</p>
                    <input className='w-full h-[40px] rounded b' type="email" name="" id="email" />
                </div>
                <div className='mt-4'>
                    <p>Password:</p>
                    <input className='w-full h-[40px] rounded b' type="password" name="" id="password" />
                </div>
                <div className='mt-4'>
                    <p>Confirm Password:</p>
                    <input className='w-full h-[40px] rounded b' type="password" name="" id="confirm-password" />
                </div>
                <div className='flex justify-center mt-6'>
                    <button className='bg-orange-200 py-2 w-full rounded font-bold'>Sign Up</button>
                </div>
                <p className='text-center text-xs mt-2'>Already have an account? <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                <div className='flex justify-around items-center mt-2'>
                    <div className='w-[30%]'>
                        <hr />
                    </div>
                    <span>Or</span>
                    <div className='w-[30%]'>
                        <hr />
                    </div>
                </div>
                <div className='flex justify-center mt-2'>
                    <button className='w-full b py-2 rounded font-bold'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default LoginDesign;