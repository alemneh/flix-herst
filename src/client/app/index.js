import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './containers/HomePageContainer/HomePage';
import UserCards from './containers/UserCardsContainer/UserCards';
import Profile from './containers/ProfileContainer/Profile';
import Login from './components/LoginComponent/Login';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path='/login' component={Login} />
      <Route path='/profile' component={Profile} />
      <Router path='/view/users/cards' component={UserCards} />
    </Route>
  </Router>, document.getElementById('app'));
