import React from 'react'; //LESSON 168

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'; 

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => { //Structure explained in L186 09:45
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer /> 
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps}/> 
    ); 
};

export default WithSpinner; 
