import React, { useEffect, useState } from 'react';
import '../CSS/Shop.css'
import useCart from '../Hooks/useCart';
import useProduct from '../Hooks/useProducts';
import { dataStorage, getCart } from '../Utilities/storage';
import Cart from './Cart';
import Product from './Product';

const Shop = () => {
    // const [cart, setCart] = useState([])
    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     fetch(`products.json`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);

    // useEffect(() => {
    //     const storedCart = getCart();
    //     const savedCart = [];
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id)
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart);
    // }, [products]);

    const handleCart = (product) => {
        let newCart = [];
        const exists = cart.find(pro => pro.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(pro => pro.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, product]
        setCart(newCart);
        dataStorage(product.id);
    }
    return (
        <div className='products-container lg:mx-0 lg:gap-6 gap-2 lg:mt-16 mt-6'>
            <div className='grid lg:grid-cols-3 gap-4 grid-cols-1'>
                {
                    products.slice(0, 15).map(product => <Product
                        key={product.id}
                        product={product}
                        handleCart={handleCart}
                    ></Product>)
                }
            </div>
            <div className='bg-[#FFE0B3] lg:px-4 px-2 rounded'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;