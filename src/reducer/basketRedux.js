import {ADD_PRODUCT} from '../action-types/basket-actionTypes'


export const successAddProd = (state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return action.basket;

        default :
            return state
    }
}