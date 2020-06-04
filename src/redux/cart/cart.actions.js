//LESSON 111
import { CartActionTypes } from './cart.types'; 

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
}); 

//No payload needed for this case. 

//Lesson 113
export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM, 
    payload: item
}); 




/**
 * ACTIONS can have a TYPE and PAYLOAD value.
 */