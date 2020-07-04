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
export const createUserProfileDocument = async (userAuth, additionalData) => { //We get userAuth from auth library
    if (!userAuth) {
        return; //exit from the function. Don't do anything else. 
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) { //create user if user doesnt exist
        const { displayName, email } = userAuth; //get displayName and email from userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log('Error creating user: ' + err.message);
        }
    }
    return userRef;
};

export const addCollectionAndDocuments = async ( //L164
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log("COLLECTION REF", collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj);
    });

    return await batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    console.log(transformedCollection);
    return transformedCollection.reduce((accumulator, collection) => { //LESSON 167
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}

firebase.initializeApp(config);

export const auth = firebase.auth(); //from firebase/auth
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase; 
