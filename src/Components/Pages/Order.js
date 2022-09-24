import React from 'react';
import useCart from '../Hooks/useCart';
import useProduct from '../Hooks/useProducts';

const Order = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
            <div>
                {
                    cart.map(product => {
                        return(  
                            <div className='flex items-center border mt-6'>
                                <div>
                                    <img className='w-[80px] h-[80px]' src={product.img} alt="" />
                                </div>
                                <div className='ml-2'>
                                    <h1>{product.name}</h1>
                                    <p className='text-xs'>Price: ${product.price}</p>
                                    <p className='text-xs'>Shipping Charge: ${product.shipping}</p>
                                </div>
                                <div className='ml-4'>
                                    <button>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                HI
            </div>
        </div>
    );
};

export default Order;