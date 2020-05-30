import React from 'react'; 

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/cuttom-button/custom-button.component'; 

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'; 

import './sign-in.styles.scss'; 

class SignIn extends React.Component{
    constructor(){
        super(); 

        this.state = {
            email: '', 
            password: ''
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault(); //prevents default submit action from happening. Gives us full control over what is going to happen.
        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''}); 
        } catch(err){
            console.log('ERROR SIGNING IN: ' + err.message); 
        } 
    }

    handleChange = event => {
        const { value, name } = event.target; //pulls both value and name off event.target (which is the input element)

        this.setState({ [name]: value }); 
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label='email'
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label='password'
                        required
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        ); 
    }
}

export default SignIn; 