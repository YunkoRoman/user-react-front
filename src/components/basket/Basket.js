import React, {Component} from 'react';
import {connect} from 'react-redux'
import './Basket.css'
import {withRouter} from "react-router-dom";


class Basket extends Component {

    renderBsaketProd({id, name, totalPrice, qtt, restaurant_id}) {
        let {restId} = this.props.match.params;
        restId = Number(restId);

        if (restId === restaurant_id) {
            return (
                <div className={'frame'}  key={id} >
                    <div className={'Basket__body__product__value__box'}>
                        <span className={'Basket__body__product__name'}>{name} </span>
                        <div className={'Basket__body__product__qtt'}>
                            <div className={'Basket__body__product__editPanel'}>
                                <button>-</button>
                                <span>{qtt}</span>
                                <button>+</button>
                            </div>
                            <div className={'Basket__body__product__price'}>
                                <span className={'Basket__body__product__price__value'}>{totalPrice}</span>
                                <span className={'Basket__body__product__price__currency'}>uah</span>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }

    }

    render() {
        const {basketProd} = this.props;
        const {total} = this.props

        return (
            <div className={'Basket shadow '}>
                <div className={'Basket__head'}>
                    <p className={'Basket__head__resName'}> Restaurant name </p>
                </div>
                <div className={'Basket__body'}>
                    <div className={'Basket__body__frame'}>
                        <div className={'Basket__body__product'}>
                            <div className={'Basket__body__product__value'}>
                                {basketProd.map(this.renderBsaketProd, this)}
                            </div>
                            <span>{total}</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        basketProd: state.basketReducer.basketProd,
        total: state.basketReducer.total
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const WithUrlDataContainerComponent = withRouter(Basket);
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)