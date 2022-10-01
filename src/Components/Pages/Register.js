import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase-config';
import google from '../Images/google.png'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';

const Register = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    if (user || googleUser) {
        console.log(user);
    }

    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error || googleError || updatingError) {
        errorMessage = <p className='text-xs text-red-500 mt-2 font-bold'>{error.message || googleError.message}</p>
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        reset();
        await updateProfile({ displayName: data.name });
    };

    return (
        <div className='flex justify-center lg:my-6'>
            <div className='w-[380px] p-8 bg-gray-50 rounded shadow-md'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center text-2xl font-bold'>Sign Up</h1>
                    <div className='mt-6'>
                        <p>Full Name:</p>
                        <input
                            className='w-full h-[40px] rounded b'
                            type="text"
                            name='name'
                            id='name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Name is Required'
                                }
                            })} />
                        <div>
                            {errors.name?.type === 'required' && <span className="text-xs text-red-500">{errors.name.message}</span>}
                            {errors.name?.type === 'minLength' && <span className="text-xs text-red-500">{errors.name.message}</span>}
                        </div>
                    </div>

                    <div className='mt-4'>
                        <p>Email:</p>
                        <input
                            className='w-full h-[40px] rounded b'
                            type="email"
                            name="email"
                            id="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                        <div>
                            {errors.email?.type === 'required' && <span className="text-xs text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="text-xs text-red-500">{errors.email.message}</span>}
                        </div>
                    </div>

                    <div className='mt-4'>
                        <p>Password:</p>
                        <input
                            className='w-full h-[40px] rounded b'
                            type="password"
                            name="password"
                            id="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                    message: 'Minimum eight characters, At least One letter, One number and One special character'
                                }
                            })} />
                        <div>
                            {errors.password?.type === 'required' && <span className="text-xs text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span className="text-xs text-red-500">{errors.password.message}</span>}
                        </div>
                    </div>

                    <div className='flex justify-center mt-6'>
                        <input className='bg-orange-200 py-2 w-full rounded font-bold' type="submit" value="SignUp" />
                    </div>
                </form>

                {errorMessage}
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
                <div className='flex justify-center items-center mt-2 b rounded'>
                    <img className='w-[30px] h-[30px]' src={google} alt="" />
                    <button onClick={() => signInWithGoogle()} className='py-2 rounded font-bold ml-2'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;