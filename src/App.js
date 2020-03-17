import React, { Component } from 'react';
import logo from './logo.svg';
import HomePage from './pages/home/homepage.component';
import { Route, Switch, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: userAuth.uid,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          });
        });
      }
      this.setState({ currentUser: userAuth });
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          < Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
