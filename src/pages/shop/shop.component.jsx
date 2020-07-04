import React from 'react';  
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'; 

// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'; 
// import CollectionPage from '../collection/collection.component'; 
import CollectionPageContainer from '../collection/collection.container'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

//REMOVED L177
//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); //Lesson 169 4:17 and removed in L177: 8:00
// const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component{ //Changed to class compo on L166
    

    componentDidMount(){
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();   
    }

    render(){
        const { match } = this.props;
        return(
            <div className='shop-page'>
                {/* Lession 169 04:51 - Remove "component" and added "render" */}
                <Route exact path={`${match.path}`} 
                    // render={(props)=>(
                    //     <CollectionsOverviewWithSpinner 
                    //         isLoading={isCollectionFetching} 
                    //         {...props} />
                    //     )} 
                    component={CollectionsOverviewContainer}
                    /> 
                <Route path={`${match.path}/:collectionId`} 
                    // render={(props)=> (
                    //     <CollectionPageWithSpinner 
                    //         isLoading={!isCollectionLoaded} 
                    //         {...props} />
                    //     )} 
                    component={CollectionPageContainer}
                    /> 
            </div>
        );
    };
}; 

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)) //Cleared in Lesson 174
});

export default connect(
    null, 
    mapDispatchToProps
    )(ShopPage); 


/* ALL REMOVED IN LESSON 174

state = {
        loading: true
    }; 

    unsubscribeFromSnapshot = null;
    //L173: moved because shot items will only be uploaded when the shop page is accessed.  
    componentDidMount(){
        const { updateCollections } = this.props; 
        const collectionRef = firestore.collection('collections');
        
        //LESSON 173 - Lots of nesting NOT IDEAL
        // fetch("https://firestore.googleapis.com/v1/projects/crwn-db-3668c/databases/(default)/documents/collections")
        // .then(response => response.json())
        // .then(collections => console.log("COLLECTIONS", collections)); 
        
        collectionRef.get() //LESSON 173 - promise
        .then(
            snapshot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot);
                updateCollections(collectionMap);  console.log(collectionMap);
                this.setState({loading: false}); 
            }
        )

        //LESSON 173 - Commented out! 
        // this.unsubscribeFromSnapshot= collectionRef.onSnapshot(async snapshot => {
        //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionMap);  console.log(collectionMap);
        //     this.setState({loading: false}); 
        // });
    };


    <Route exact path={`${match.path}`} component={CollectionsOverview} /> 
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

    REMOVED L177:
    const mapStateToProps = createStructuredSelector({
        isCollectionFetching: selectIsCollectionFetching,
        isCollectionLoaded: selectIsCollectionsLoaded
    });

    */