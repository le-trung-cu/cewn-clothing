import React, { Component } from 'react';
import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password } = this.state;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { displayName, email, password } = this.state;
        return (
            <div className="sign-up">
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text"
                        handleChange={this.handleChange}
                        name="displayName"
                        value={displayName}
                        lablel="display name" />
                    <FormInput type="email"
                        handleChange={this.handleChange}
                        name="email"
                        value={email}
                        lablel="email" />

                    <FormInput type="password"
                        handleChange={this.handleChange}
                        value={password}
                        name="password"
                        lablel="email" />
                    <CustomButton type="submit">Submit</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;