//LESSON 114; 2:00

export const addItemToCart = (cartItems, cartItemToAdd) => { //(state.cartItems, action.payload)
    const existingCartItem = cartItems.find( //returns the first value that returns true
        cartItem=> cartItem.id === cartItemToAdd.id); //does the new item match another items id? 

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1} ];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    ); 

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(
        cartItem => 
        cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem 
    );
}