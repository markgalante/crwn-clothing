import React from 'react'; 

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/cuttom-button/custom-button.component'

import './sign-in.styles.scss'; 

class SignIn extends React.Component{
    constructor(){
        super(); 

        this.state = {
            email: '', 
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault(); //prevents default submit action from happening. Gives us full control over what is going to happen.

        this.setState({email: '', password: ''}); 
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

                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                </form>
            </div>
        ); 
    }
}

export default SignIn; 