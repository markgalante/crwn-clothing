import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'; 

function App() {
  return (
    <div>
      <div>
        <Header /> 
        <Switch> {/* Makes sure only one is rendered. */}
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} /> 
        </Switch>
      </div>
    </div>
  );
}

export default App;
