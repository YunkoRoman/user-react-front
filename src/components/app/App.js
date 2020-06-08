import React, {Component} from 'react';
import {connect} from 'react-redux'

import {
    Switch,
    Route
} from "react-router-dom";
import PrivateRoute from '../route/privateRoute'
import Registration from '../../containers/registrationPage'
import HomePage from '../../containers/homePage'
import SingIn from "../../containers/SingInPage/SingIn";
import Restaurant from "../../containers/restautaurant"

import './App.css';
import {checkUser} from "../../actions/checkUser-actions";


class App extends Component {
    componentDidMount(){
        const token = localStorage.getItem('token');
        this.props.checkUser(token);
    }
    render() {

        return (
            <Switch>
                <Route path={'/login'}>
                    <SingIn/>
                </Route>
                <Route path={'/registration'}>
                    <Registration/>
                </Route>
                <Route path={'/restaurant/:restId'}>
                    <Restaurant/>
                </Route>
                <Route path={'/'} exact>
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
