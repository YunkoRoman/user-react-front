import {AUTH_IS_SUCCESS, AUTH_IS_SENDING, AUTH_IS_ERROR} from '../action-types/auth-actionTypes'

export const authIsErrored = (state = false, action) => {
    switch (action.type) {
        case AUTH_IS_ERROR:
            return action.hasErrored;

        default :
            return state
    }
}

export const authIsSending = (state = false, action) => {
    switch (action.type) {
        case AUTH_IS_SENDING:
            return action.authSending;

        default :
            return state
    }
};

export const authIsSuccess = (state = [], action) => {
    switch (action.type) {
        case AUTH_IS_SUCCESS:
            return action.authResult;

        default :
            return state
    }
}