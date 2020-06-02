import RestaurantService from '../../services/restaurant.service'
import {
    RES_LISTS_ERRORED,
    RES_LISTS_FETCH_DATA_SUCCESS,
    RES_LISTS_IS_LOADING
} from '../../action-types/restaurantsList-actionTypes'

export const restListHasErrored = (bool) => {
    return {
        type: RES_LISTS_ERRORED,
        hasErrored: bool
    }
};

export const restListIsLoadig = (bool) => {
    return {
        type: RES_LISTS_IS_LOADING,
        isLoading: bool
    }
};

export const restListFetchDataSucces = (result) => {
    return {
        type: RES_LISTS_FETCH_DATA_SUCCESS,
        result
    }
};

export function restListFetchData() {
    const {getPosts} = RestaurantService;
    return (dispatch) => {
        dispatch(restListIsLoadig(true));

        getPosts()
            .then((result) =>
                dispatch(restListFetchDataSucces(result),
                    dispatch(restListIsLoadig(false))))
            .catch(() => dispatch(restListHasErrored(true)));
    }
}