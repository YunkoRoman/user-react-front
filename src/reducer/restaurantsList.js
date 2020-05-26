import {
    RES_LISTS_FETCH_DATA_SUCCESS,
    RES_LISTS_IS_LOADING,
    RES_LISTS_ERRORED
} from '../action-types/restaurantsList-actionTypes'
export const restListHasErrored = (state = false, action) => {
    switch (action.type) {
        case  RES_LISTS_ERRORED:
            return action.hasErrored;

        default :
            return state
    }
};

export const restListIsLoadig =(state = false, action) => {
    switch (action.type) {
        case  RES_LISTS_IS_LOADING:
            return action.isLoading;

        default :
            return state
    }
};

export const result = (state = [], action) => {
    switch (action.type) {
        case RES_LISTS_FETCH_DATA_SUCCESS:
            return action.result;

        default:
            return state;
    }
};






