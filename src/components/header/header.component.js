import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import{connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hiddenCart, change }) => {
    return (
        <div className="header">
            {change.change? <p>xxx</p>:<h1>yyyy</h1>}
            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/shop'>
                    CONTACT
                </Link>

                {
                    currentUser?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        : <Link className="option" to='/signin'>SING IN</Link>
                }
                <CartIcon/>
            </div>
            {hiddenCart?null:<CartDropdown/>}
        </div>
    );
};

const mapStateToProp = ({user, cart, change}) => ({
    currentUser: user.currentUser,
    hiddenCart: cart.hidden,
    change: change
});


export default connect(mapStateToProp)(Header);