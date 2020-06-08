import React, {Component} from 'react';
import {connect} from 'react-redux'
import './Basket.css'
import {restListFetchData} from "../../actions/restaurantsList-actions";

class Basket extends Component{


    render(){
        return(
            <div className={'Basket'}>
                <div className={'Basket__head'}>
                    <p className={'Basket__head__resName'}> </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
