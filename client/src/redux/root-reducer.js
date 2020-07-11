//LESSON 104: 
/*
A root reducer is actual base reducer object that represents all the state of the 
application. 

Combines all other states together from other reducers.
*/

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //States you want to use local storage; 

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'; 
import directoryReducer from './directory/directory.reducer'; 
import shopReducer from './shop/shop.reducer'; 

const persistConfig = {
    key: 'root', 
    storage, 
    whitelist: ['cart'] //contains reducers we want to store. 'user' is being handled by firebase. Therefore, we only want to use 'cart' 
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer, 
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);