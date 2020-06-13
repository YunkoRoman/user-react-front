import React, {Component} from 'react';
import {connect} from 'react-redux'
import './Basket.css'
import {addProduct} from "../../actions/basket-actions";


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
                                <span className={'Basket__body__product__qtt'}> 1 </span>
                                <span className={'Basket__body__product__name'}> BBQ</span>
                                <span className={'Basket__body__product__price'}> 56 uah</span>
                            </div>
                            <div className={'Basket__body__product__editPanel'}>
                                <button>-</button>
                                <span>Edit</span>
                                <button onClick={this.props.addProduct}>+</button>
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
        addProduct: () => dispatch(addProduct(1))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
