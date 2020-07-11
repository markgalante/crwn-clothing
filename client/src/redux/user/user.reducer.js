//LESSON 104 - setting up reducers. 

/**
 * A reducer is a function that gets 2 properties: 
 * 1. A state object - represents the last/initial state. 
 * 2. An action - an object that has: 
 *  a type: String
 *  payload: can be anything - a flexible property. 
 */

import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;

//LESSON 105: To make a store. Make another file on redux called 'store.js' 