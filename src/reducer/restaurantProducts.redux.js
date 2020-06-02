import {
    RES_PRODUCTS_FETCH_DATA_SUCCESS,
    RES_PRODUCTS_IS_LOADING,
    RES_PRODUCTS_ERRORED
} from '../action-types/restaurantProducts-actionTypes'

export const restProductsHasErrored = (state = false, action) => {
    switch (action.type) {
        case  RES_PRODUCTS_ERRORED:
            return action.hasErrored;

        default :
            return state
    }
};

export const restProductsIsLoading = (state = false, action) => {
    switch (action.type) {
        case  RES_PRODUCTS_IS_LOADING:
            return action.isLoading;

        default :
            return state
    }
};

export const restProductsFetchDataSucces = (state = [], action) => {
    switch (action.type) {
        case RES_PRODUCTS_FETCH_DATA_SUCCESS:
            return action.result;

        default:
            return state;
    }
};






