//LESSON 111 

import { CartActionTypes } from './cart.types'; 
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true, 
    cartItems: [] //Lesson 113
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
        return{
            ...state,
            hidden: !state.hidden
        };

        case CartActionTypes.ADD_ITEM: //Lesson 113 
        return{ 
            ...state, //Returns all of the state
            cartItems: addItemToCart(state.cartItems, action.payload) //modified lesson 114
            //cartItems: [...state.cartItems, action.payload] //contains old items (state.cartItem) and appends new item (action.payload)
        }; 
        default:
            return state; 
    }
} 

export default cartReducer; 