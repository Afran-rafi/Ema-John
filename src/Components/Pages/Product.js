import React from 'react';
import '../CSS/Product.css'

const Product = (props) => {
    const {id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity} = props.product
    return (
        <div className='product rounded lg:mx-0 mx-10'>
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
            <button className='bg-[#FFE0B3] w-full py-1 mt-2'>Add to Cart</button>
        </div>
    );
};

export default Product;