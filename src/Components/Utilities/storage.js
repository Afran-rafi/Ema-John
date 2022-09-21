const dataStorage = (id) => {
    const shoppingCart = getCart();

    // Quantity Update ------> 
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    // const setItem ----->
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart)); 
}

const getCart = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }
    return shoppingCart;
}

export {
    dataStorage,
    getCart
};