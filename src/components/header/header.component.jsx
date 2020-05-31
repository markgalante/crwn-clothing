import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //L106 
//connect is a higher order component. 

import { auth } from '../../firebase/firebase.utils'; 
import CartIcon from '../cart-icon/cart-icon.component'; //Imported L109
import CartDropdown from '../cart-dropdown/cart-dropdown.component'; 

import { ReactComponent as Logo } from '../../assets/crown.svg';  

import './header.styles.scss'; 

const Header = ({ currentUser, hidden }) => ( //L106 - now receives this from reducer
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link to='/shop' className='option' >SHOP</Link>
            <Link to='/contact' className='option' >CONTACT</Link>
            {
                currentUser ? 
                <div className='option' onClick={()=> {auth.signOut()} }>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon /> 
        </div>
        { 
            hidden ? null : 
            <CartDropdown />
        } 
    </div>
);

//LESSON 106 
const mapStateToProps = ({user:{currentUser}, cart: { hidden }}) => ({ //state is top-level userReducer. 
    //currentUser: state.user.currentUser //L111 - Editing this
    currentUser, 
    hidden
}); 

export default connect(mapStateToProps)(Header); 