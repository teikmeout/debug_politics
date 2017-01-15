import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import CreateUser from './components/CreateUser/CreateUser.jsx';
import Results from './components/Results/Results.jsx';
import Main from './components/Main/Main.jsx';
import UpdateUser from './components/UpdateUser/UpdateUser.jsx';

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={LogIn} />
    <Route path='/create' component={CreateUser} />
    <Route path='/home' component={Home} />
    <Route path='/main' component={Main} />
    <Route path='/results' component={Results} />
    <Route path='/update' component={UpdateUser} />
  </Route>
);
