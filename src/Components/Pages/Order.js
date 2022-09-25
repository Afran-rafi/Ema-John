import React, { useState } from 'react';
import useCart from '../Hooks/useCart';
import useProduct from '../Hooks/useProducts';
import Cart from './Cart';
import '../CSS/Order.css'
import { removeStorage } from '../Utilities/storage';

const Order = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest);
        removeStorage(product.id);
    }
    return (
        <div className='order-container gap-10'>
            <div>
                {
                    cart.map(product => {
                        return(  
                            <div key={product.id} className='flex items-center border p-1 mt-6 rounded'>
                                <div>
                                    <img className='w-[80px] h-[80px] rounded' src={product.img} alt="" />
                                </div>
                                <div className='flex items-center w-full justify-between lg:mr-20'>
                                    <div className='ml-2'>
                                        <h1 className=''>{product.name}</h1>
                                        <p className='text-xs'>Price: ${product.price}</p>
                                        <p className='text-xs'>Shipping Charge: ${product.shipping}</p>
                                        <p className='text-xs'>Quantity: {product.quantity}</p>
                                    </div>
                                    <div className='ml-4'>
                                        <button onClick={()=> handleRemoveProduct(product)}><i className="fa-regular fa-trash-can bg-red-500 p-2 rounded-full text-white"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='bg-[#FFE0B3] px-6 mt-6 py-6 rounded'>
                <Cart cart={cart}>
                    <button>Proceed Checkout <i className="fa-solid fa-money-check-dollar"></i></button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;