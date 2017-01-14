import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import Home from './Home/Home.jsx';
import styles from './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      yes: 'yes',
      officials: [],
    }
  }

  officialsList() {
    return this.state.officials.map((official, i) => {
     <Home
       official.name
       official.party
       official.phones[0]
       official.urls[0]
     </RepContainer>
     // <img src="official.photoUrl" alt="official.name"/>
     // <a href="www.facebook.com/{}"></a>

  }
     })

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
