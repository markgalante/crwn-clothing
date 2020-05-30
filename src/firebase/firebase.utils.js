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
}

firebase.initializeApp(config); 

export const auth = firebase.auth(); //from firebase/auth
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ promt: 'select_account' }); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
