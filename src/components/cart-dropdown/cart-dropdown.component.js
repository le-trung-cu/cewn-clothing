import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../actions/cart-action';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        (cartItems.map(item => <CartItem key={item.id} {...item} />))
                        : <span className="empty-message">your cart is empty</span>
                }
            </div>
            <CustomButton
                onClick={
                    () => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden())
                    }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

const mapStateToProp = ({ cart }) => ({
    cartItems: cart.cartItems
})

export default withRouter(connect(mapStateToProp)(CartDropdown));