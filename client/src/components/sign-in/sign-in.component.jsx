import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/cuttom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss';

//Converted to function component on lession 201
const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: "", password: "" })

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault(); //prevents default submit action from happening. Gives us full control over what is going to happen.    
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target; //pulls both value and name off event.target (which is the input element)

        setCredentials({ ...userCredentials, [name]: value });
    }



    return (
        <div className='sign-in'>
            <h2>I already have an account </h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />

                <div className='buttons'>
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign In With Google </CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);

// Changed sign in logic in lesson 188 and 189