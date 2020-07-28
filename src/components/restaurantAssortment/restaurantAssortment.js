import React, {Component} from 'react';

import './restaurantAssortment.css';
import {baseUrlAdmin} from '../../constants/AppUrl'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {restProductsFetchData} from "../../actions/restaurantProducts-action";
import {addProduct, checkLocalStorage} from "../../actions/basket-actions";
import ModalPage from "../modal-page/modalPage";
import {openModalPage} from "../../actions/modalPage-actions";


class restaurantAssortment extends Component {
    componentDidMount() {
        const {restId} = this.props.match.params;
        this.props.fetchProducts(restId);
        this.props.checkLocalStorage(restId)
    }


    componentDidUpdate(prevProps) {

        if (prevProps.match.params.restId !== this.props.match.params.restId) {
            const {restId} = this.props.match.params;
            this.props.fetchProducts(restId);
        }

    }


    renderMenu({id, name, products}) {

        const renderProducts = ({description, id, name, path, price}) => {
            const click = () => {
                this.props.addProduct(id);
                // this.props.openModal(true)
            };
            return (
                <div key={id} className={'assort_box__prodBox__frame shadow'}>
                    <div className={'assort_box__prodBox__img'}>
                        <img className={'product_img'} src={`${baseUrlAdmin}/${path}`} alt=""/>
                    </div>
                    <div className={'assort_box__prodBox__descr'}>
                        <p className="assort_box__prodBox__product_name">{name}</p>
                        <p className={'assort_box__prodBox__product_desc'}>{description}</p>
                        <div className="assort_box__prodBox__footer">
                            <div className="assort_box__prodBox__price">
                                <span className="assort_box__prodBox__priceValue"> {price}</span>
                                <span className="assort_box__prodBox__valuta"> грн </span>
                            </div>
                            <button className="assort_box__prodBox_btn" onClick={() => click()}>
                                Add to card
                            </button>
                            {/*<ModalPage>*/}

                            {/*</ModalPage>*/}
                        </div>
                    </div>
                </div>
            )

        };

        return (

            <div key={id} className={'assort_box'}>
                <div className={'assort_box__general'}>
                    <div className={'assort_box__menuName'}>
                        <p>{name}</p>
                    </div>
                    <div className={'assort_box__prodBox'}>
                        {products.map(renderProducts, this)}
                    </div>
                </div>
            </div>
        )
    }


    render() {
        const {result} = this.props;
        const {menu} = result;
        console.log(this.props);
        if (menu !== undefined) {
            const {msg} = menu;
            return (
                <div className={'bodyComponent'}>
                    {msg.map(this.renderMenu, this)}
                </div>
            )
        }
        if (this.props.restProductsIsLoading) {
            return (
                <div>
                    <h1>Loading</h1>
                </div>
            )
        }
        return (
            <div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        stateModalPage: state.modalPageReducer.modalState,
        restProductsHasErrored: state.restProductsHasErrored,
        restProductsIsLoading: state.restProductsIsLoading,
        result: state.restProductsFetchDataSucces
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (bool) => dispatch(openModalPage(bool)),
        fetchProducts: (restId) => dispatch(restProductsFetchData(restId)),
        addProduct: (prodId) => dispatch(addProduct(prodId)),
        checkLocalStorage: (restId) => dispatch(checkLocalStorage(restId))
    }
};
const WithUrlDataContainerComponent = withRouter(restaurantAssortment);
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)