import {TOGGLE_CART_HIDDEN, ADD_ITEM} from './action-types';

export const toggleCartDropdown = () => ({
    type: TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: ADD_ITEM,
    item
});