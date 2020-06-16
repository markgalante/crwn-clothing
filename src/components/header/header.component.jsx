import React from 'react'; 
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //L106 //connect is a higher order component. 
import { createStructuredSelector } from 'reselect'; 

import { auth } from '../../firebase/firebase.utils'; 
import CartIcon from '../cart-icon/cart-icon.component'; //Imported L109
import CartDropdown from '../cart-dropdown/cart-dropdown.component'; 
import { selectCartHidden } from '../../redux/cart/cart.selectors'; //L121
import { selectCurrentUser } from '../../redux/user/user.selectors'; //121

import { ReactComponent as Logo } from '../../assets/crown.svg';  

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './headers.styles'

// import './header.styles.scss'; 

const Header = ({ currentUser, hidden }) => ( //L106 - now receives this from reducer
    <HeaderContainer>
        <LogoContainer  to='/'> {/*Removed className='logo-container'*/}
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ? 
                <OptionDiv onClick={()=> {auth.signOut()} }>SIGN OUT</OptionDiv>
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

export default connect(mapStateToProps)(Header); 