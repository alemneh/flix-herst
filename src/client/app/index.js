import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './containers/HomePageContainer/HomePage';
import Profile from './containers/ProfileContainer/Profile';
import Login from './components/LoginComponent/Login';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path='/login' component={Login} />
      <Route path='/profile' component={Profile} />
    </Route>
  </Router>, document.getElementById('app'));
