//LESSON 120 - Using the reselect npm package to improve performance. 
// Reselect prevents whole state re-rendering when updating state. 

import { createSelector } from 'reselect'; 
/**
 *                      2 Types of selectors: 
 *                          Input Selector - doesn't use createSelector
 *                          Output selector - uses input and create selector
 */

const selectCart = state => state.cart; 


export const selectCartItems = createSelector(
    [selectCart], 
    cart => cart.cartItems //returns the value we want out the selector. 
); 

export const selectCartHidden = createSelector(
    [selectCart], 
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity, 0) 
); 

export const selectCartTotal = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity * cartItem.price, 
        0) 
); 

