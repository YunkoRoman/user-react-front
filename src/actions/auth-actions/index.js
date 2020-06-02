import AuthService from '../../services/auth.service'
import {AUTH_IS_ERROR, AUTH_IS_SENDING, AUTH_IS_SUCCESS} from '../../action-types/auth-actionTypes'

export const authIsErrored = (bool) => {
    return {
        type: AUTH_IS_ERROR,
        hasErrored: bool
    }
};
export const authIsSending = (bool) => {
    return {
        type: AUTH_IS_SENDING,
        authSending: bool
    }
};
export const authIsSuccess = (authResult) => {
    return {
        type: AUTH_IS_SUCCESS,
        authResult
    }
};

export function authUser(email, password) {
    const {authUser} = AuthService;

    return (dispatch) => {
        dispatch(authIsSending(true));

        authUser(email, password)
            .then((authResult) =>
                dispatch(authIsSuccess(authResult),
                    dispatch(authIsSending(false))))
            .catch((err) => {
                console.log(err.response);
                dispatch(authIsErrored(true));
                    dispatch(authIsSending(false))
            });
    }
}

