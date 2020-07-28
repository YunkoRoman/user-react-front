import {
    STATE_MODAL_PAGE
} from '../action-types/modal-actionTypes'
import initialState from "./inithialState";

export const modalPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATE_MODAL_PAGE :
            const {bool} = action;
            console.log(bool);
            state = {
                ...state,
                modalState: bool
            };
            break

    }
    return state
};