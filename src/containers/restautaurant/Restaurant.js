import React, {Component} from 'react';
import Header from '../../components/header'
import Footer from "../../components/footer/Footer";
import RestaurantAssortment from '../../components/restaurantAssortment'
import Basket from '../../components/basket'
import './Restaurant.css'
import {connect} from "react-redux";
import {stickyBasket} from "../../actions/basket-actions";


class Restaurant extends Component {


    constructor(props) {
        super(props);

        this.sticky = this.sticky.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.sticky );
    }


    sticky() {
        const restPageBasket = document.getElementsByClassName('RestPage__basket');
        const sticky = restPageBasket[0].offsetTop;

        window.pageYOffset > sticky ? this.props.stickyBasket(true) : this.props.stickyBasket(false)

    }

    render() {
        return (
            <div className={'restaurantContainer'}>
                <Header/>
                <div className={'RestPage'}>
                    <div className={'RestPage__assortment'}>
                        <RestaurantAssortment/>
                    </div>
                    <div className={`${this.props.sticky ? 'RestPage__basket sticky stickyPadding' : 'RestPage__basket'}` }>
                        <Basket/>
                    </div>
                </div>


                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sticky: state.basketReducer.sticky
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        stickyBasket: (bool) => dispatch(stickyBasket(bool))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)