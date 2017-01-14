import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import Main from './components/Main/Main.jsx';


module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path="/main" component={Main} />

  </Route>
);
