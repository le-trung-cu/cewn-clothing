import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        return cartItems.reduce((count, item) => {
            return count + item.quantity
        }, 0)
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)
)