import { createStore, applyMiddleware } from 'redux'; //middleware from redux/ 
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; 

import rootReducer from './root-reducer'; 

//LESSON 105: Set up middleware. 
const middlewares = []; 

//LESSON 151 - ONLY SHOWING LOGGER IF IN PRODUCTION MODE: 
if(process.env.NODE_ENV==="development"){
    middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); //A persisted version of our store. 