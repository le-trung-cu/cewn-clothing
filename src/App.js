import React from 'react';
import logo from './logo.svg';
import HomePage from './pages/home/homepage.component';
import { Route, Switch, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div className="App">
      <Link to='/'>home</Link>
      <Link to='/shop'>hats page</Link>
      <Switch>
        < Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
