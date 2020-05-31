//LESSON 104 - setting up reducers. 

/**
 * A reducer is a function that gets 2 properties: 
 * 1. A state object - represents the last/initial state. 
 * 2. An action - an object that has: 
 *  a type: String
 *  payload: can be anything - a flexible property. 
 */

import { UserActionTypes } from './user.types'; 

const INITIAL_STATE = {
    currentUser: null 
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){ //action.type will be a String
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, //...state - everything else 
                currentUser: action.payload 
            };
        default: 
            return state
    }
}; 


export default userReducer; 

//LESSON 105: To make a store. Make another file on redux called 'store.js' 