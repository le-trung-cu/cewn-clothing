import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartDropdown } from '../../actions/cart-action';
import { connect } from 'react-redux';

const CartIcon = ({ toggleCart, cartItems}) => {
    return (
        <div className="cart-icon" onClick={() => toggleCart()}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartItems}</span>
        </div>
    );
};

const mapStateToProp = state => ({
    cartItems: state.cart.cartItems.reduce((count, item) => count += item.count, 0)
})

const mapDispatchToProp = dispatch => ({
    toggleCart: () => dispatch(toggleCartDropdown())
})

export default connect(mapStateToProp, mapDispatchToProp)(CartIcon);