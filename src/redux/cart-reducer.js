import { TOGGLE_CART_HIDDEN } from '../actions/action-types';

export const cartReducer = (state = { hidden: true }, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}

export default cartReducer
