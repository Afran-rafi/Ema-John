import React, { useEffect, useState } from 'react';
import '../CSS/Shop.css'
import Product from './Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='products-container lg:mx-0 mx-10 lg:gap-6 gap-2'>
            <div className='grid lg:grid-cols-3 gap-4 grid-cols-1'>
                {
                    products.map(product => <Product
                    key= {product.id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div className='bg-[#FFE0B3]'>
                <h1 className='text-xl text-center mt-10 lg:p-0 p-2'>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shop;