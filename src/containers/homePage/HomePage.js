import React, {Component} from 'react';
import Header from '../../components/header'
import Body from '../../components/bodyHomePage'
import Footer from "../../components/footer/Footer";

import './HomePage.css';


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

export default HomePage;
