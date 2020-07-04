import React from 'react'; 
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //L106 //connect is a higher order component. 
import { createStructuredSelector } from 'reselect'; 

import CartIcon from '../cart-icon/cart-icon.component'; //Imported L109
import CartDropdown from '../cart-dropdown/cart-dropdown.component'; 
import { selectCartHidden } from '../../redux/cart/cart.selectors'; //L121
import { selectCurrentUser } from '../../redux/user/user.selectors'; //121
import { signOutStart } from '../../redux/user/user.actions'

import { ReactComponent as Logo } from '../../assets/crown.svg';  

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './headers.styles'

// import './header.styles.scss'; 

const Header = ({ currentUser, hidden, signOutStart }) => ( //L106 - now receives this from reducer
    <HeaderContainer>
        <LogoContainer  to='/'> {/*Removed className='logo-container'*/}
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ? 
                <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon /> 
        </OptionsContainer>
        { 
            hidden ? null : 
            <CartDropdown />
        } 
    </HeaderContainer>
);

//LESSON 106 // Edited with selector in lesson 121
const mapStateToProps = createStructuredSelector({ //state is top-level userReducer. //{user:{currentUser}, cart: { hidden }} removed from args in L121
    //currentUser: state.user.currentUser //L111 - Editing this
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
}); 

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header); 