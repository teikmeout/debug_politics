import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import styles from './LogIn.css';

class LogIn extends Component {
  constructor(props) {
    super(props);
  }

  postLogin(e) {
    console.log('logging in')
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
        browserHistory.push('/home')
        localStorage.setItem('token', data)
      } else {
        console.log('nope')
      }
      console.log(data)
    })
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
      <div className={styles['']}>
        <div className="log-in">
          <input
            type="text"
            placeholder="username"
            onChange={this.trackLoginInput.bind(this)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={this.trackLoginInput.bind(this)}
          />
        </div>
      <button><Link className="signup-button" to="/create"> Sign Up </Link></button>
      <button onClick={this.postLogin.bind(this)}>Log In</button>
      </div>
    );
  }
}

export default LogIn;
