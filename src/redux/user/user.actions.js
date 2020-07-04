//LESSON 105/ 7:00 

//Imported in lesson 8 4:30
import UserActionTypes from './user.types';

//LESSON 188
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
  });
  
  export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
  });
  
  export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
  });
  
  export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  });
  
  export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
  });
  
  export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
  });
  
  export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
  });
  
  export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
  });
  
  export const signUpStart = userCredentials => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
  });
  
  export const signUpSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
  });
  
  export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
  });


//REMOVED LESSON 189
// export const setCurrentUser = (user) => ({
//     type: UserActionTypes.SET_CURRENT_USER, //L105: Same string set in user.reducer.js
//     payload: user
// });