import React, { useState } from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../cuttom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions'

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss';

//LESSON 94; 
const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();


        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value });
    };

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>

        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})


export default connect(
    null,
    mapDispatchToProps
)(SignUp);













//REMOVED FROM Component Did Mount L195
// try{
            // const { user } = await auth.createUserWithEmailAndPassword(email, password);
        //     await createUserProfileDocument(user, { displayName }); //Await for this to finish before setting state

        //     this.setState({
        //         displayName: '', 
        //         email: '',
        //         password: '', 
        //         confirmPassword: ''
        //     });            
        // } catch(err){
        //     console.error(err); 
        // }