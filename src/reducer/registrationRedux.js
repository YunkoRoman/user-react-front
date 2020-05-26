import {REGISTER_IS_SUCCESS, DATA_IS_SENDING, REGISTER_IS_ERROR} from '../action-types/registration-actionTypes'

export const registerIsErrored = (state = false, action) => {
    switch (action.type) {
        case REGISTER_IS_ERROR:
            return action.hasErrored;

        default :
            return state
    }
}

export const dataIsSending = (state = false, action) => {
    switch (action.type) {
        case DATA_IS_SENDING:
            return action.dataSending;

        default :
            return state
    }
};

export const registerIsSuccess = (state = [], action) => {
    switch (action.type) {
        case REGISTER_IS_SUCCESS:
            return action.regResult;

        default :
            return state
    }
}