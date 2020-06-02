import React, {Component} from 'react';
import Header from '../../components/header'
import Body from '../../components/bodyHomePage'
import Footer from "../../components/footer/Footer";

import './HomePage.css';
import {connect} from "react-redux";
import {checkUser} from "../../actions/checkUser-actions";


class HomePage extends Component {


    render() {
        const token = localStorage.getItem('token');
        this.props.checkUser(token);
        return (

            <div className={'homePage'}>
                <Header/>
                <Body/>
                <Footer/>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkUser: (token) => dispatch(checkUser(token))
    }
};

export default connect(null, mapDispatchToProps)(HomePage)
