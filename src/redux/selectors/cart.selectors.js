import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => { 
        
        return cartItems.reduce((count, item) => {
            console.log('slect call');
            return count + item.quantity}, 0)
    }
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((total, item) => total+item.price, 0)
)