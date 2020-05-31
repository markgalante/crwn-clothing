import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; //Redirect added on L108 
import { connect } from 'react-redux'; //L107


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'; 
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 

import { setCurrentUser } from './redux/user/user.actions'; //L107 

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
  componentDidMount(){  //Google authentication sign-in
    const { setCurrentUser } = this.props; 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => { //from firebase/auth library 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth); //checks database. Function from firebase.utils.js
        
        userRef.onSnapshot(snapShot => {
          // this.setState({ //Changed in Lesson 107 
          //   currentUser:{ 
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // });
          setCurrentUser({
            id: snapShot.id, 
            ...snapShot.data()
          });
        }); 
      } else{
        setCurrentUser(userAuth); //L107: changed from this.setState({ currentUser: userAuth }) 
      }
    }); 
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render(){
    return (
      <div>
        <Header/> 
        <Switch> {/* Makes sure only one is rendered. */}
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} /> 
          <Route exact path='/signin' render={()=> //Redirect when sign in process done
            this.props.currentUser ? 
            (<Redirect to='/' />) : 
            (<SignInAndSignUpPage/>)
            } 
          /> 
        </Switch>
      </div>
    );
  }
}

//LESSON 108 - To redirect when sign in process done. 
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

//LESSON107 - mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}); 
/** LESSON 107
 * Dispatch is a way for redux to know that whatever you're passing 
 * is going to be an action object that will be passed to every reducer. 
 */

export default connect(
  mapStateToProps, //L108 : formall null. Changed for the purpost to redirect once logged in.  
  mapDispatchToProps
  )(App);
