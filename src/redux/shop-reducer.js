import SHOP_DATA from './data/shop.data';

const shopReducer = (state = { collections: SHOP_DATA }, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;