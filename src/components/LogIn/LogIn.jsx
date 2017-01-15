import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import styles from './LogIn.css';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
    }
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
              onChange={this.props.trackLoginInput}
            />
            <input
              type="password"
              placeholder="password"
              onChange={this.props.trackLoginInput}
            />
          </div>

          <button><Link className="signup-button" to="/create"> Sign Up </Link></button>
          <button onClick={this.props.postLogin}>Log In</button>
        </div>
      </div>
    );
  }
}

export default LogIn;
