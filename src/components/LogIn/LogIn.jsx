import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './LogIn.css';

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
      <div className="login_container">
        <h1>RepDotBody</h1>
        <br/>
        <br/>
        <br/>
        <div className="login-flex-parent">
          <div className="log-in">
            <input
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.trackLoginInput.bind(this)}
            />
            <input
              type="text"
              placeholder="password"
              value={this.state.password}
              onChange={this.trackLoginInput.bind(this)}
            />
          </div>

          <button><Link className="signup-button" to="/create"> Sign Up </Link></button>
          <button><Link className="login-button" to="/home"> Log In </Link></button>
        </div>
      </div>
    );
  }
}

export default LogIn;
