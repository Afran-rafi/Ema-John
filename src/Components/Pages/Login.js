import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Login.css';
import google from '../Images/google.png'

const Login = () => {
    return (
        <div className='flex justify-center lg:my-6'>
            <div className='w-[380px] p-8 bg-gray-50 rounded shadow-md'>
                <h1 className='text-center text-2xl font-bold'>Login</h1>
                <div className='mt-4'>
                    <p>Email:</p>
                    <input className='w-full h-[40px] rounded b' type="email" name="" id="email" />
                </div>
                <div className='mt-4'>
                    <p>Password:</p>
                    <input className='w-full h-[40px] rounded b' type="password" name="" id="password" />
                </div>
                <div className='flex justify-center mt-6'>
                    <button className='bg-orange-200 py-2 w-full rounded font-bold'>Login</button>
                </div>
                <p className='text-center text-xs mt-2'>New to Ema John? <Link className='text-orange-500 font-bold' to='/signUp'>Create New User</Link></p>
                <div className='flex justify-around items-center mt-2'>
                    <div className='w-[30%]'>
                        <hr />
                    </div>
                    <span>Or</span>
                    <div className='w-[30%]'>
                        <hr />
                    </div>
                </div>
                <div className='flex justify-center items-center mt-2 b rounded'>
                    <img className='w-[30px] h-[30px]' src={google} alt="" />
                    <button className='py-2 rounded font-bold ml-2'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;