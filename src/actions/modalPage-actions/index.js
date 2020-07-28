import {
    STATE_MODAL_PAGE
} from '../../action-types/modal-actionTypes'

export const openModalPage = (bool) => {
    return {
        type: STATE_MODAL_PAGE,
        bool
    }
};


