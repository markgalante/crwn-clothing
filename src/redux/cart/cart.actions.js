//LESSON 111
import { CartActionTypes } from './cart.types'; 

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
}); 

//No payload needed for this case. 