import React from 'react';
import './checkout-item.styles.scss';
import {removeItem} from '../../actions/cart-action';
import {connect} from 'react-redux';

const CheckoutItem = ({cartItem: {id, name, imageUrl, price, quantity}, dispatch}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-button"
                onClick={() => dispatch(removeItem(id))}>&#10005;</span>
        </div>
    );
};

export default connect(null)(CheckoutItem);