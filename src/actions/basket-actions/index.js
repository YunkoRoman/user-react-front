import {
    ADD_PRODUCT,
    CHECK_LOCALSTORAGE,
    ADDITION_QQT_PRODUCT,
    SUBTRACTION_QTT_PRODUCT,
    DELETE_PRODUCT,
    STICKY_BASKET
} from '../../action-types/basket-actionTypes'


export const addProduct = (id) => {
    return {
        type: ADD_PRODUCT,
        id
    }
};

export const checkLocalStorage = (restaurant_id) => {
    return {
        type: CHECK_LOCALSTORAGE,
        restaurant_id
    }
};
export const additionQttProd = (id) => {
    return {
        type: ADDITION_QQT_PRODUCT,
        id
    }
};
export const subtractionQttProd = (id) => {
    return {
        type: SUBTRACTION_QTT_PRODUCT,
        id
    }
};
export const deleteProd = (id) => {
    return {
        type: DELETE_PRODUCT,
        id
    }
};
export const stickyBasket = (bool) => {
    return {
        type: STICKY_BASKET,
        bool
    }
};