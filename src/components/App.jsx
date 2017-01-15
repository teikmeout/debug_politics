import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import Home from './Home/Home.jsx';
import styles from './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      officials: [],
      activeOfficial: {},
      address: '',
    }
  }

  postLogin() {
    return fetch('/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/JSON'
      },
      body: JSON.stringify({
        loginUsername: this.state.loginUsername,
        loginPassword: this.state.loginPassword
      })
    })
    .then(result => result.json())
    .then( (data) => {
      if (!data.failed) {
        this.setState({
          address: data.address
        })
        browserHistory.push('/home');
        localStorage.setItem('token', data.token);
      } else {
        console.log('nope')
      }
    })
  }

  getOfficialsByAddress() {
    const queryString =  '/official/' + this.state.address
    return fetch(queryString)
    .then(response => response.json())
    .then( (data) => {
      this.setState({
        officials: data.officials
      })
    })
    .catch( (error) => {
      console.log(error)
    });
  };

// function to change the state of official in results page when a representative is clicked.
  changeOfficial(official) {
    this.setState({
      activeOfficial: official,
    });
    browserHistory.push('/results')
  }

  trackLoginInput(e) {
    let inputArray = e.target.parentElement.childNodes
    this.setState({
      loginUsername: inputArray[0].value,
      loginPassword: inputArray[1].value,
    });
  }

  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          address: this.state.address,
          trackLoginInput: this.trackLoginInput.bind(this),
          postLogin: this.postLogin.bind(this),
          officials: this.state.officials,
          getOfficialsByAddress: this.getOfficialsByAddress.bind(this),
          activeOfficial: this.state.activeOfficial,
        })}
      </div>
    );
  }
}

export default App;
