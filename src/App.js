import React, { Component } from 'react';
import logo from './logo.svg';
import HomePage from './pages/home/homepage.component';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';

import { setCurrentUser } from './actions/user-action';

class App extends Component {
  constructor() {
    super();
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: userAuth.uid,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(null);
      console.log(this.state);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Link to='/'>home</Link>
        <Link to='/shop'>hats page</Link>
        <Header />
        <Switch>
          < Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={() => (
            this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          )}>
          </Route>
        </Switch>
      </div>
    );
  }

}

const mapDispatchToProp = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProp = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProp, mapDispatchToProp)(App);
