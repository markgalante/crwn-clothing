import { createStore, applyMiddleware } from 'redux'; //middleware from redux/ 
import logger from 'redux-logger'; 

import rootReducer from './root-reducer'; 

//LESSON 105: Set up middleware. 
const middlewares = [logger]; 

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store; //Bring this into index.js and pass into <Provider /> 
