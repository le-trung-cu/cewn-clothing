import React from 'react';
import logo from './logo.svg';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Link } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Link to='/'>home</Link>
      <Link to='/hats'>hats page</Link>
      <Switch>
        < Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
