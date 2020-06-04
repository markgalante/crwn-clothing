//LESSON 114; 2:00

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find( //returns true or false. 
        cartItem=> cartItem.id === cartItemToAdd.id); //does the new item match another items id? 

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantitiy: cartItem.quantitiy + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantitiy: 1} ];
};