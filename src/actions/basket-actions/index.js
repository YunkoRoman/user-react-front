import {ADD_PRODUCT, CHECK_LOCALSTORAGE} from '../../action-types/basket-actionTypes'


export const addProduct = (id) => {
    return {
        type: ADD_PRODUCT,
        id
    }
};

export const checkLocalStorage = (restaurant_id) => {
    return{
        type: CHECK_LOCALSTORAGE,
        restaurant_id
    }
}