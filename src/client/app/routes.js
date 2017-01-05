import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './containers/HomePageContainer/HomePage';
import UserCards from './containers/UserCardsContainer/UserCards';
import Profile from './containers/ProfileContainer/Profile';
import Login from './components/LoginComponent/Login';


const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/login' component={Login} />
    <Route path='/profile' component={Profile} />
    <Route path='/view/users/cards' component={UserCards} />
  </Route>
)

export default routes;
