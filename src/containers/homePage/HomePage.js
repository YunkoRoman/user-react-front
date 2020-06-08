import React, {Component} from 'react';
import Header from '../../components/header'
import Body from '../../components/bodyHomePage'
import Footer from "../../components/footer/Footer";

import './HomePage.css';
import {connect} from "react-redux";


class HomePage extends Component {


    render() {

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

    }
};

export default connect(null, mapDispatchToProps)(HomePage)
