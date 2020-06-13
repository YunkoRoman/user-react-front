import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {restListHasErrored, restListIsLoadig, result} from './restaurantsList'
import {registerIsErrored, dataIsSending, registerIsSuccess} from './registrationRedux'
import {authIsErrored, authIsSending, authIsSuccess} from './authRedux'
import {errorUserCheck, successUserCheck} from './checkUserRedux'
import {restProductsFetchDataSucces, restProductsHasErrored, restProductsIsLoading} from './restaurantProducts.redux'
import {successAddProd} from './basketRedux'


export default combineReducers({
    form: formReducer,
    restListHasErrored,
    restListIsLoadig,
    result,
    registerIsErrored,
    dataIsSending,
    registerIsSuccess,
    authIsErrored,
    authIsSending,
    authIsSuccess,
    errorUserCheck,
    successUserCheck,
    restProductsFetchDataSucces,
    restProductsHasErrored,
    restProductsIsLoading,
    successAddProd
});