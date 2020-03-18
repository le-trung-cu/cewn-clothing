import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../actions/cart-action';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/selectors/cart.selectors'

const CartIcon = ({ toggleCart, count }) => {
    console.log("render cart icon");
    return (
        <div className="cart-icon" onClick={() => toggleCart()}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{count}</span>
        </div>
    );
};

const mapStateToProps = state => {
    return ({
        count: selectCartItemsCount(state)
    })
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);