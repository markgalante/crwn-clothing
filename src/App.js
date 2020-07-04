import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; //Redirect added on L108 
import { connect } from 'react-redux'; //L107
import { createStructuredSelector } from 'reselect'; //LESSON 121


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors'; //LESSON 121
import { checkUserSession } from './redux/user/user.actions' // L 191

class App extends React.Component {
  //DELETED IN LESSON 107 when using mapDispachToProps
  // constructor(){
  //   super(); 

  //   this.state = {
  //     currentUser: null 
  //   }
  // };  

  unsubscribeFromAuth = null; //calling a new method - default is null 

  //LESSON 93
  componentDidMount() {  //Google authentication sign-in
   const { checkUserSession } = this.props;
   checkUserSession()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch> {/* Makes sure only one is rendered. */}
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => //Redirect when sign in process done
            this.props.currentUser ?
              (<Redirect to='/' />) :
              (<SignInAndSignUpPage />)
          }
          />

        </Switch>
      </div>
    );
  }
}

//LESSON 108 - To redirect when sign in process done. 
const mapStateToProps = createStructuredSelector({ //Called when the store state changes 
  currentUser: selectCurrentUser
  // collectionsArray: selectCollectionForPreview //LESSON 163
});

const mapDispachToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps, //L108 : formall null. Changed for the purpost to redirect once logged in.  
  mapDispachToProps
)(App);





























//REMOVED FOLLOWING IN L189: 
// import { auth, createUserProfileDocument } from './firebase/firebase.utils'; Remove L189

// import { setCurrentUser } from './redux/user/user.actions'; //L107 Remove L189 

//Removed from ComponentsDidMount(){

// this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => { //from firebase/auth library 
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth); //checks database. Function from firebase.utils.js

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({ //Changed in Lesson 107 
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth); //L107: changed from this.setState({ currentUser: userAuth }) 
    //     // addCollectionAndDocuments('collections', collectionsArray.map(({title, items})=>({title, items})))
    //   }
    // });
// }

// L189 - Removed mapDispatchToProps
//LESSON107 - mapDispatchToProps
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });
/** LESSON 107
 * Dispatch is a way for redux to know that whatever you're passing 
 * is going to be an action object that will be passed to every reducer. 
 */