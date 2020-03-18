import React from 'react';
import './checkout-item.styles.scss';
import { clearItem,removeItem, addItem } from '../../actions/cart-action';
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    const { id, name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={()=>removeItem(id)}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</span>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button"
                onClick={() => clearItem(id)}>&#10005;</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: id => dispatch(clearItem(id)),
    removeItem: id => dispatch(removeItem(id)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);