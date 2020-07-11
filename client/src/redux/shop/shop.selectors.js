import { createSelector } from 'reselect'; 

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop], 
    shop => shop.collections
); 

//converting the object into an array 
export const selectCollectionForPreview = createSelector(
    [selectCollections], 
    collections => 
        collections ? Object.keys(collections).map(key => collections[key]) : [] //Edited L168
); 

//Lesson 138
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop], 
    shop => !!shop.collections
)