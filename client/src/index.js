import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux'; //LESSON 104
import { PersistGate } from 'redux-persist/integration/react'; 

import './index.css';
import App from './App';

import { persistor, store } from './redux/store'; //LESSON 105: created and imported.

//Provider is a component that is the parent of everything inside the application.
//Now to wrtie the store in src/redux... 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);