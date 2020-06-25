import React, {Component} from 'react';
import {connect} from 'react-redux'
import './Basket.css'


class Basket extends Component {


    render() {
        return (
            <div className={'Basket shadow '}>
                <div className={'Basket__head'}>
                    <p className={'Basket__head__resName'}> Restaurant name </p>
                </div>
                <div className={'Basket__body'}>
                    <div className={'Basket__body__frame'}>
                        <div className={'Basket__body__product'}>
                            <div className={'Basket__body__product__value'}>
                                <span className={'Basket__body__product__qtt'}>  </span>
                                <span className={'Basket__body__product__name'}> </span>
                                <span className={'Basket__body__product__price'}>  uah</span>
                            </div>
                            <div className={'Basket__body__product__editPanel'}>
                                <button>-</button>
                                <span>Edit</span>
                                <button >+</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
