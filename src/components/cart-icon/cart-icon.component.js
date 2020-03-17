import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {toggleCartDropdown} from '../../actions/cart-action';
import {connect} from 'react-redux';

const CartIcon = ({toggleCart}) => {
    return (
        <div className="cart-icon" onClick={() => toggleCart()}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    );
};


const mapDispatchToProp = dispatch => ({
    toggleCart: () => dispatch(toggleCartDropdown())
})

export default connect(null, mapDispatchToProp)(CartIcon);