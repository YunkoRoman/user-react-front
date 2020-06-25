import RestaurantService from '../../services/restaurant.service'
import {
    RES_PRODUCTS_ERRORED,
    RES_PRODUCTS_FETCH_DATA_SUCCESS,
    RES_PRODUCTS_IS_LOADING,
} from '../../action-types/restaurantProducts-actionTypes'

export const restProductsHasErrored = (bool) => {
    return {
        type: RES_PRODUCTS_ERRORED,
        hasErrored: bool
    }
};

export const restProductsIsLoadig = (bool) => {
    return {
        type: RES_PRODUCTS_IS_LOADING,
        isLoading: bool
    }
};

export const restProductsFetchDataSucces = (result) => {
    return {
        type: RES_PRODUCTS_FETCH_DATA_SUCCESS,
        result
    }
};

export function restProductsFetchData(restId) {
    const {getProducts} = RestaurantService;
    return (dispatch) => {
        dispatch(restProductsIsLoadig(true));

        getProducts(restId)
            .then((result) =>
                dispatch(restProductsFetchDataSucces(result),
                    dispatch(restProductsIsLoadig(false))))
            .catch(() => dispatch(restProductsHasErrored(true)));
    }
}