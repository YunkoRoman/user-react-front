import React from 'react';
import {
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import {connect} from 'react-redux';


 const PrivateRoute = ({children, auth, ...rest}) => (
    <Route {...rest} render={(props) =>
        auth === true ? (
            children
        ) : (
            <Redirect to="/login"/>
        )
    }/>

);


const mapStateToProps = state => ({
    auth: state.successUserCheck.data
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));



