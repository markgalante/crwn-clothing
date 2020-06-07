import { createSelector } from 'reselect'; 

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
); 

//converting the object into an array 
export const selectCollectionForPreview = createSelector(
    [selectCollections], 
    collections => Object.keys(collections).map(key => collections[key])
); 

//Lesson 138
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
);