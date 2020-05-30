import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'; 
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 

class App extends React.Component {
  constructor(){
    super(); 

    this.state = {
      currentUser: null 
    }
  }; 

  unsubscribeFromAuth = null; //calling a new method - default is null 

  //LESSON 93
  componentDidMount(){  //Google authentication sign-in
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => { //from firebase/auth library 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); //checks database. Function from firebase.utils.js
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        }); 
      } else{
        this.setState({ currentUser: userAuth }); 
      }
    }); 
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} /> 
        <Switch> {/* Makes sure only one is rendered. */}
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} /> 
          <Route path='/signin' component={SignInAndSignUpPage} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
