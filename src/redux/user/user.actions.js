//LESSON 105/ 7:00 

//Imported in lesson 8 4:30
import { UserActionTypes } from './user.types'; 

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER, //L105: Same string set in user.reducer.js
    payload: user 
});