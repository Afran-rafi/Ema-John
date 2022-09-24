import React from 'react';
import '../CSS/Product.css'

const Product = (props) => {
    const { product, handleCart } = props;
    const { name, seller, price, ratings, img } = product;
    return (
        <div className='product rounded'>
            <div className='px-1 pt-1'>
                <div>
                    <img className='rounded' src={img} alt="" />
                </div>
                <div className='h-[80px]'>
                    <h1>{name}</h1>
                    <p>Price: ${price}</p>
                </div>
                <div className='text-[12px]'>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings}</p>
                </div>
            </div>
            
            <button onClick={() => handleCart(product)} className='w-full bg-[#FFE0B3] px-4 py-1 mt-2'>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
        </div>
    );
};

export default Product;