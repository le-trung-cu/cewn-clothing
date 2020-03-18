import {
    TOGGLE_CART_HIDDEN,
    ADD_ITEM,
    REMOVE_ITEM,
    CLEARE_ITEM
} from '../actions/action-types';

export const cartReducer = (state = { hidden: true, cartItems: [] }, action) => {
    let cartItems, existingCartItem;
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM:
            cartItems = state.cartItems;
            existingCartItem = cartItems.find(item => item.id === action.item.id)
            if (existingCartItem) {
                cartItems = cartItems.map(
                    item => item === existingCartItem ?
                        { ...item, quantity: ++item.quantity }
                        : item
                )
            } else {
                state.cartItems.push({ ...action.item, quantity: 1 });
            }
            return {
                ...state,
                cartItems: [...cartItems]
            }
        case CLEARE_ITEM:
            cartItems = state.cartItems.filter(item => item.id !== action.id);
            return {
                ...state,
                cartItems: [...cartItems]
            }
        case REMOVE_ITEM:
            cartItems = state.cartItems;
            existingCartItem = cartItems.find(item => item.id === action.id);

            if (existingCartItem.quantity !== 1) {
                cartItems = cartItems.map(item => item.id === action.id ?
                    { ...item, quantity: --item.quantity }
                    : item);
            } else {
                cartItems = cartItems.filter(item => item.id !== action.id);
            }


            return {
                ...state,
                cartItems: [...cartItems]
            }
        default:
            return state;
    }
}

export default cartReducer
