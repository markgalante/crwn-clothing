//LESSON 104: 
/*
A root reducer is actual base reducer object that represents all the state of the 
application. 

Combines all other states together from other reducers.
*/

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer'; 

export default combineReducers({
    user: userReducer
});