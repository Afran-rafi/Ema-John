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

const removeStorage = (id) => {
    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        }
    }
}

const storageRemoved = () => {
    localStorage.removeItem('shoppingCart');
}

export {
    dataStorage,
    getCart,
    removeStorage, 
    storageRemoved
};