import React from 'react'; 

// import './custom-button.styles.scss';

import { CustomButtonContainer } from './custom-button.styles';

//LESSON 157 - removed the following destructure: { children, isGoogleSignIn, inverted, ...otherProps }
const CustomButton = ({children, ...props}) => (
    // <button 
    //     className={`${inverted? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}
    // >
    //     {children}
    // </button>
    <CustomButtonContainer {...props} >
        {children}
    </CustomButtonContainer>
); 

export default CustomButton; 