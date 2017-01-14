import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  postLogin(e) {
    return fetch('localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/JSON'
      },
      body: JSON.stringify({
        loginUsername: this.state.username,
        loginPassword: this.state.loginPassword
      })
    })
    .then( (data) => {
      localStorage.setItem('token', data)
    })
  }

  trackLoginInput(e) {
    console.log(e)
    this.setState({
      username: e.target.value,
      password: e.target.value,
    });
  }

  render() {
    return (
      <div className={styles['']}>
        <div className="log-in">
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.trackLoginInput.bind(this)}
          />
        </div>
      </div>
    )
  }
}
