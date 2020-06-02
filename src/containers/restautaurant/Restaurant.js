import React, {Component} from 'react';
import Header from '../../components/header'
import Footer from "../../components/footer/Footer";
import RestaurantAssortment from '../../components/restaurantAssortment'

import {connect} from "react-redux";


class Restaurant extends Component {


    render(){
        return(
            <div className={'restaurantContainer'}>
                <Header/>
                <RestaurantAssortment/>

                <Footer/>
            </div>
        )
    }
}

export default connect(null, null)(Restaurant)