import React, {Component} from 'react';
import SingInForm from "../../components/singInForm";

import './SingIn.css'
import {authUser} from "../../actions/auth-actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class SingIn extends Component {
    submit = ({email, password}) => {
        this.props.authUser(email, password)
    };

    render() {

        if (this.props.authIsSuccess.data) {
            const data = this.props.authIsSuccess.data;
            localStorage.setItem('token', data.msg);
            if (data.success) return <Redirect from={'/login'} to={'/'}/>
        }
        return (
            <div>
                <div id="login-box">
                    <div className="left">
                        <h1>Sign In</h1>


                        <SingInForm onSubmit={this.submit}/>
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

const mapStateToProps = (state) => {
    return {
        authIsSuccess: state.authIsSuccess,
        authIsSending: state.authIsSending,
        authIsErrored: state.authIsErrored
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authUser: (email, password) => dispatch(authUser(email, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingIn)