import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useProduct from '../Hooks/useProducts';
import Cart from './Cart';
import Homepage from './Homepage';
import Product from './Product';
import Shop from './Shop';

const Home = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <Homepage></Homepage>
            <div className='products-container lg:mx-0 lg:gap-6 gap-2 lg:mt-16 mt-6'>
            <div className='grid lg:grid-cols-3 gap-4 grid-cols-1'>
                {
                    products.slice(0,9).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='bg-[#FFE0B3] lg:px-4 px-2 rounded'>
                <Cart cart={cart}>
                <Link to='/order'><button>Review Order <i className="fa-solid fa-arrow-right"></i></button></Link>
                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Home;