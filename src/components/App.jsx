import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import Home from './Home/Home.jsx';
import styles from './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      yes: 'yes'
    }
  }

  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {

        })}
      </div>
    );
  }
}

export default App;
