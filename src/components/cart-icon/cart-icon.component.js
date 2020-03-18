import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartDropdown } from '../../actions/cart-action';
import { connect } from 'react-redux';
import {selectCartItemsCount} from '../../redux/selectors/cart.selectors'

const CartIcon = ({ toggleCart, count}) => {
    return (
        <div className="cart-icon" onClick={() => toggleCart()}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{count}</span>
        </div>
    );
};

const mapStateToProps = state =>{
    console.log("i'm call")
    return({
        count: selectCartItemsCount(state)
    })
} 

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);