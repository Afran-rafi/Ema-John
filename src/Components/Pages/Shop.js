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
        <div className='products-container'>
            <div className='grid lg:grid-cols-3 gap-4 grid-cols-1'>
                {
                    products.map(product => <Product
                    key= {product.id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div>
                <h1 className='text-xl'>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shop;