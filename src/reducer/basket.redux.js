import {
    ADD_PRODUCT,
    CHECK_LOCALSTORAGE,
    ADDITION_QQT_PRODUCT,
    SUBTRACTION_QTT_PRODUCT,
    DELETE_PRODUCT,
    STICKY_BASKET
} from '../action-types/basket-actionTypes'
import initialState from './inithialState'

export const checkLocalStorage = (state = [], action) => {
    switch (action.type) {
        case CHECK_LOCALSTORAGE:
            if (localStorage.getItem('basket')) {
                const basket = JSON.parse(localStorage.getItem('basket'));
                const {restaurant_id} = action;
                basket.forEach(e => {
                    if (e.restaurant_id = restaurant_id) {
                        initialState.basketProd.push(e)
                    }
                });
            } else initialState.basketProd = [];

            return {
                basketProd: initialState.basketProd
            };
        default:
            return state
    }
};


export const basketReducer = (state = initialState, action) => {
    const {products} = state;
    const {id: prodId} = action;
    const {basketProd} = state;
    let addedProd = products.find(prod => prod.id === prodId);
    let existed_prod = basketProd.find(prod => prod.id === prodId);
    switch (action.type) {
        case ADD_PRODUCT:

            if (existed_prod !== undefined) {
                addedProd.qtt += 1;
                addedProd.totalPrice = addedProd.price * addedProd.qtt;
                state = {
                    ...state,
                    basketProd: [...state.basketProd],
                    total: state.total + addedProd.price
                }
            } else {
                addedProd.qtt = 1;
                addedProd.totalPrice = addedProd.price;
                state = {
                    ...state,
                    basketProd: [...state.basketProd, addedProd],
                    total: state.total + addedProd.price
                }
            }
            break;
        case ADDITION_QQT_PRODUCT:
            addedProd.qtt += 1;
            addedProd.totalPrice = addedProd.price * addedProd.qtt;
            state = {
                ...state,
                basketProd: [...state.basketProd],
                total: state.total + addedProd.price
            };
            break;
        case SUBTRACTION_QTT_PRODUCT:
            if (addedProd.qtt > 1) {
                addedProd.qtt -= 1;
                addedProd.totalPrice = addedProd.price * addedProd.qtt;
                state = {
                    ...state,
                    basketProd: [...state.basketProd],
                    total: state.total - addedProd.price
                }
            }
            break;
        case DELETE_PRODUCT:
            const prodIndex = basketProd.findIndex(e => e.id === prodId);
            basketProd.splice(prodIndex, 1);

            state = {
                ...state,
                basketProd: [...state.basketProd],
                total: state.total - addedProd.totalPrice
            };
            break;
        case STICKY_BASKET:
            const {bool} = action;
            state = {
                ...state,
                sticky: bool
            };
            break
    }
    return state
};