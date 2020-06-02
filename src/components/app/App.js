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


const App = ({store}) => {

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

    };



export default App
