import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(({id, name}) => <div key={id}>{name}</div>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProp = ({ cart }) => ({
    cartItems: cart.cartItems
})

export default connect(mapStateToProp)(CartDropdown);