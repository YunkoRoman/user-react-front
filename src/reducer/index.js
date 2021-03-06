import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {restListHasErrored, restListIsLoadig, result} from './restaurantsList'
import {registerIsErrored, dataIsSending, registerIsSuccess} from './registrationRedux'
import {authIsErrored, authIsSending, authIsSuccess} from './authRedux'
import {errorUserCheck, successUserCheck} from './checkUserRedux'
import {restProductsFetchDataSucces, restProductsHasErrored, restProductsIsLoading} from './restaurantProducts.redux'
import {basketReducer, checkLocalStorage,} from './basket.redux'
import {fetchRestInfoDataSucces, fetchRestInfosHasErrored} from './restaurantInfo.redux'
import {modalPageReducer} from './modalPage.redux'


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
    basketReducer,
    checkLocalStorage,
    fetchRestInfoDataSucces,
    fetchRestInfosHasErrored,
    modalPageReducer
});