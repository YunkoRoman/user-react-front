import RestaurantService from '../../services/restaurant.service'

import {
   FETCH_REST_INFO_ERROR,
    FETCH_REST_INFO_SUCCESS
} from '../../action-types/restauranInfo-actionTypes'

export const fetchProdInfoError  = (bool) => {
    return {
        type: FETCH_REST_INFO_ERROR,
        hasErrored: bool
    }
};

export const fetchProdInfoSucces = (result) => {
    return {
        type: FETCH_REST_INFO_SUCCESS,
        result
    }
};

export function fetchProdInfo (restId) {

    const {getRestInfo} = RestaurantService;
    return (dispatch) => {
        getRestInfo(restId)
            .then((res)=> {
                dispatch(fetchProdInfoSucces(res))
            })
            .catch(dispatch(fetchProdInfoError(true)))
    }

}