import UserCheck from '../../services/userCheck.service'
import {ERROR_USER_CHECK, SUCCESS_USER_CHECK} from '../../action-types/checkUser-actionTypes'

export const errorUserCheck = (bool) => {
    return {
        type: ERROR_USER_CHECK,
        hasErrored: bool
    }
};

export const successUserCheck = (checkResult) => {
    return {
        type: SUCCESS_USER_CHECK,
        checkResult
    }
};

export function checkUser(token) {
    const {sendToken} = UserCheck;

    return (dispatch) => {

        sendToken(token)
            .then((checkResult) =>
                dispatch(successUserCheck(checkResult)
                ))
            .catch((err) => {
                console.log(err.response);
                dispatch(errorUserCheck(true))
            });
    }
}