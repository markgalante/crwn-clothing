//LESSON 111
import { CartActionTypes } from './cart.types'; 

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
}); //No payload needed for this case. 

//Lesson 113
export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM, 
    payload: item
}); 

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM, 
    payload: item 
}); 

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})


/**
 * ACTIONS can have a TYPE and PAYLOAD value.
 */