import RegistrationService from '../../services/registration.service'
import {DATA_IS_SENDING, REGISTER_IS_ERROR, REGISTER_IS_SUCCESS} from '../../action-types/registration-actionTypes'

export const registerIsErrored = (bool) => {
    return {
        type: REGISTER_IS_ERROR,
        hasErrored: bool
    }
};
export const dataIsSending = (bool) => {
    return {
        type: DATA_IS_SENDING,
        dataSending: bool
    }
};
export const registerIsSuccess = (regResult) => {
    return {
        type: REGISTER_IS_SUCCESS,
        regResult
    }
};

export function SendRegisterData(form) {
    const {sendRegisterDatas} = RegistrationService;

    return (dispatch) => {
        dispatch(dataIsSending(true));

        sendRegisterDatas(form)
            .then((regResult) =>
                dispatch(registerIsSuccess(regResult),
                    dispatch(dataIsSending(false))))
            .catch(() => dispatch(registerIsErrored(true)));
    }
}