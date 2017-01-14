import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import App from './App.jsx';
import Home from './components/Home/Home.jsx';


module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />

  </Route>
);
