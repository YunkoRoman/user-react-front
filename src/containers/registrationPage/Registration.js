import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import RegisterForm from '../../components/registerForm'
import {SendRegisterData} from "../../actions/registration-actions";

import './Registration.css'

class Registration extends Component {

    submit = form => {
        this.props.SendRegisterData(form)
    };

    render() {
        const data = this.props.registerIsSuccess.data;
        if (data && data.success !== undefined) {
            alert('You have successfully registered ');
            return <Redirect to={'/login'}/>
        }

        return (
            <div>
                <div id="login-box">
                    <div className="left">
                        <h1>Sign up</h1>
                        <RegisterForm onSubmit={this.submit}/>
                    </div>

                    <div className="right">
                        <span className="loginwith">Sign in with<br/>social network</span>

                        <button className="social-signin facebook">Log in with facebook</button>
                        <button className="social-signin twitter">Log in with Twitter</button>
                        <button className="social-signin google">Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        registerIsSuccess: state.registerIsSuccess,
        dataIsSending: state.dataIsSending,
        registerIsErrored: state.registerIsErrored
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        SendRegisterData: (form) => dispatch(SendRegisterData(form))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration)