import React from 'react';

const Cart = (props) => {
    const {cart} = props
    return (
        <div>
            <h1 className='text-xl text-center mt-10 lg:p-0 p-2 font-bold'>Order Summary</h1>
            <div className='mt-6'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: </p>
                <p>Total Shipping Charge: </p>
                <p>Tax: </p>
                <h5 className='font-bold text-md'>Grand Total: </h5>
            </div>
            <button className='bg-[#FF3030] w-full py-1 text-white rounded mt-4'>Clear Cart <i className="fa-solid fa-trash-can"></i></button>
            <button className='bg-[#FF9900] w-full py-1 text-white rounded mt-4'>Review Order <i className="fa-solid fa-arrow-right"></i></button>
        </div>
    );
};

export default Cart;