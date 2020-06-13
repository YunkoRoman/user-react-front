import {ADD_PRODUCT} from '../../action-types/basket-actionTypes'


export const successAddProd = (basket) => {
    return {
        type: ADD_PRODUCT,
        basket
    }
};

export function addProduct(product) {
    const basket = localStorage.getItem('basket')
    console.log(basket);
    console.log(product);
    return (dispatch) => {

    }
}