import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';


class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            auth.signInWithEmailAndPassword(email, password);
        }catch(error){
            console.log(error);
        }

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }




    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email" name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        id="email"
                        lablel="email" />

                    <FormInput type="password" name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        id="password"
                        lablel="lable" />
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign with google</CustomButton>
                    </div>

                </form>

            </div>
        );
    }
}

export default SignIn;