import {SUCCESS_USER_CHECK, ERROR_USER_CHECK} from '../action-types/checkUser-actionTypes'

export const errorUserCheck = (state = false, action) => {
    switch (action.type) {
        case ERROR_USER_CHECK:
            return action.hasErrored;

        default :
            return state
    }
}



export const successUserCheck = (state = [], action) => {
    switch (action.type) {
        case SUCCESS_USER_CHECK:
            return action.checkResult;

        default :
            return state
    }
}