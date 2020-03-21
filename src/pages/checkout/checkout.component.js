import React from 'react';
import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from '../../redux/selectors/cart.selectors';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = ({ cartItems, cartTotal }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <div className="total">
                <span>TOTAL ${cartTotal}</span>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state),
        cartTotal: selectCartTotal(state)
    }

};

export default connect(mapStateToProps)(Checkout);