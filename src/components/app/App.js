import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PrivateRoute from '../route/privateRoute'
import {checkUser} from "../../actions/checkUser-actions";

import Registration from '../../containers/registrationPage'
import HomePage from '../../containers/homePage'
import SingIn from "../../containers/SingInPage/SingIn";


import './App.css';


class App extends Component {


    render() {
        const token = localStorage.getItem('token');
        this.props.checkUser(token);
        return (

            <Switch>
                <Route path={'/login'}>
                    <SingIn/>
                </Route>
                <PrivateRoute path={'/registration'}>
                    <Registration/>
                </PrivateRoute>
                <Route path={'/'} exact={true}>
                    <HomePage/>
                </Route>
            </Switch>

        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        checkUser: (token) => dispatch(checkUser(token))
    }
};

export default connect(null, mapDispatchToProps)(App)
