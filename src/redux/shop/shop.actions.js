import ShopActionTypes from './shop.types'; 
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
}); 

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, 
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})


//REMOVED L183 when running redux-saga
// export const fetchCollectionsStartAsync = () => {
    // return dispatch => {
    //     const collectionRef = firestore.collection('collections');
    //     dispatch(fetchCollectionsStart()); 

    //     collectionRef.get() //LESSON 173 - promise
    //     .then(
    //         snapshot => {
    //             const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //             dispatch(fetchCollectionsSuccess(collectionMap));
    //         }
    //     ).catch(err=> dispatch(fetchCollectionsFailure(err.message)))
    // }
// }


//REMOVED IN L174- Redux Thunk 
// export const updateCollections = (collectionsMap) => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS, 
//     payload: collectionsMap
// }); 
