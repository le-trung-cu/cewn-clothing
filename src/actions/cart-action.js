import {TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, CLEARE_ITEM} from './action-types';

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: ADD_ITEM,
    item
});

export const removeItem = id => ({
    type: REMOVE_ITEM,
    id
})

export const clearItem = id => ({
    type: CLEARE_ITEM,
    id
})