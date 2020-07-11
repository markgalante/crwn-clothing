import { createStore, applyMiddleware } from 'redux'; //middleware from redux/ 
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';  
import createSagaMiddleware from 'redux-saga'; 
import rootSaga from './root-saga'
import rootReducer from './root-reducer'; 

const sagaMiddleware = createSagaMiddleware(); 
//LESSON 105: Set up middleware. 
const middlewares = [sagaMiddleware]; 

//LESSON 151 - ONLY SHOWING LOGGER IF IN PRODUCTION MODE: 
if(process.env.NODE_ENV==="development"){
    middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga); 

export const persistor = persistStore(store); //A persisted version of our store. 


//CHANGES: 
/*
*   import thunk from 'redux-thunk'-Removed L183 when importing redux-saga.
*/