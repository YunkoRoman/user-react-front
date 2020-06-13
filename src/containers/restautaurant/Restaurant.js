import React, {Component} from 'react';
import Header from '../../components/header'
import Footer from "../../components/footer/Footer";
import RestaurantAssortment from '../../components/restaurantAssortment'
import Basket from '../../components/basket'
import './Restaurant.css'
import {connect} from "react-redux";


class Restaurant extends Component {


    render() {
        return (
            <div className={'restaurantContainer'}>
                <Header/>
                <div className={'RestPage'}>
                    <div className={'RestPage__assortment'}>
                        <RestaurantAssortment/>
                    </div>
                    <div className={'RestPage__basket'}>
                        <Basket/>
                    </div>
                </div>


                <Footer/>
            </div>
        )
    }
}

export default connect(null, null)(Restaurant)