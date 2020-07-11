import React from 'react'; 

import { connect } from 'react-redux'; 

import CustomButton from '../cuttom-button/custom-button.component'; 
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss'; 

const CollectionItem = ({ item, addItem }) => { //This code was altered on lesson 113
    const {name, price, imageUrl} = item; 
    return(
        <div className='collection-item'>
            <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton className='custom-button' onClick={()=>addItem(item)} inverted> ADD TO CART </CustomButton>
        </div>
    )
    
}; 

const mapDispatchToProps = dispatch => ({ //LESSON113 - adding item to props
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem); 