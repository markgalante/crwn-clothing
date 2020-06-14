import React from 'react'; 
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100; 
    const publishableKey = "pk_test_51GtxqPLrtWP6VJu5Ji5QGcMLaEXvXYVpXUPZtPocnr6URC2At018pBjfFQvp8mykiTl8lcMx253rbeocjbP7AhUW00Rxfmwtkl";
    const onToken = token => {console.log(token); alert("Payment Successful");}
    return(
        <StripeCheckout 
            label='Pay Now'
            name="Crwn Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe} 
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        /> 
    ); 
};

export default StripeCheckoutButton; 