import {
    FETCH_REST_INFO_SUCCESS,
    FETCH_REST_INFO_ERROR
} from '../action-types/restauranInfo-actionTypes'
import initialState from "./inithialState";

export const fetchRestInfosHasErrored = (state = false, action) => {
    switch (action.type) {
        case  FETCH_REST_INFO_ERROR:
            return action.hasErrored;

        default :
            return state
    }
};

export const fetchRestInfoDataSucces = (state = [], action) => {
    switch (action.type) {
        case FETCH_REST_INFO_SUCCESS:

            console.log(action.result);
            return action.result.data.msg[0]



        default:
            return state;
    }
};
