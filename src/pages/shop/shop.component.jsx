import React from 'react';  
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'; 

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'; 
import WithSpinner from '../../components/with-spinner/with-spinner.component'; 



import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); //Lesson 169 4:17
const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component{ //Changed to class compo on L166
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

    render(){
        const { match } = this.props;
        const { loading } = this.state
        return(
            <div className='shop-page'> 
                {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> 
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />  */}

                {/* Lession 169 04:51 - Remove "component" and added "render" */}
                <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props} />} /> 
                <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props} />} /> 
            </div>
        );
    };
}; 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage); 