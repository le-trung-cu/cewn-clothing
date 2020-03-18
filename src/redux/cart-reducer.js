import {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    REMOVE_ITEM
} from '../actions/action-types';

export const cartReducer = (state = { hidden: true, cartItems: [] }, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM:
            const index = state.cartItems.findIndex(item => item.id === action.item.id)
            if (index !== -1) {
                state.cartItems[index].quantity++;
            } else {
                state.cartItems.push({ ...action.item, quantity: 1 });
            }
            return {
                ...state,
                cartItems: [...state.cartItems]
            }
        case REMOVE_ITEM:
            const cartItems = state.cartItems.filter(item => item.id !== action.id);
            return {
                ...state,
                cartItems: [...cartItems]
            }
        default:
            return state;
    }
}

export default cartReducer
