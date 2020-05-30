import firebase from 'firebase/app'; //firebase has all the utility libraries loaded. 
import 'firebase/firestore'; 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyBtxt3U4w-MilNBh5BVq28QzHh-JSiDVuU",
    authDomain: "crwn-db-3668c.firebaseapp.com",
    databaseURL: "https://crwn-db-3668c.firebaseio.com",
    projectId: "crwn-db-3668c",
    storageBucket: "crwn-db-3668c.appspot.com",
    messagingSenderId: "247083066837",
    appId: "1:247083066837:web:fa22c0e09908a429ac095c",
    measurementId: "G-KB8N4T1CTQ"
}; 

//LECTURE 91
export const createUserProfileDocument = async(userAuth, additionalData) =>{ //We get userAuth from auth library
    if(!userAuth){
        return; //exit from the function. Don't do anything else. 
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`); 
    const snapShot = await userRef.get(); 

    if(!snapShot.exists){ //create user if user doesnt exist
        const { displayName, email } = userAuth; //get displayName and email from userAuth;
        const createdAt = new Date(); 
        
        try{
            await userRef.set({
                displayName,
                email, 
                createdAt, 
                ...additionalData
            });
        } catch (err){
            console.log('Error creating user: ' + err.message); 
        }
    }
    return userRef; 
}

firebase.initializeApp(config); 

export const auth = firebase.auth(); //from firebase/auth
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ promt: 'select_account' }); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
