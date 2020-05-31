//CREATED LESSON 110
import React from 'react'; 

import CustomButton from '../cuttom-button/custom-button.component';

import './cart-dropdown.styles.scss'; 

const CartDropdown = () => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartDropdown; //To header - LESSON 110