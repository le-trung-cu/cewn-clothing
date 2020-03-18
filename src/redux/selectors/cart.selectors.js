import {createSelector} from 'reselect';

const selectCart = state => state.cart.cartItems;

// export const selectCartItems = createSelector(
//     [selectCart],
//     cart => cart.cartItems
// );

export const selectCartItemsCount = createSelector(
    [selectCart],
    cartItems => { 
        console.log('slect call')
        return cartItems.reduce((count, item) => count + item.quantity, 0)
    }
)