import React,  { Component }from 'react';
import { Link, browserHistory } from 'react-router';
import styles from './CreateUser.css';

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signupUsername: '',
      signupPassword: '',
      confirmPassword: '',
      address: '',
    }
  }

  createUser(e) {
    e.preventDefault();
    const bodyObj = {
      signupUsername: this.state.signupUsername,
      signupPassword: this.state.signupPassword,
      confirmPassword: this.state.confirmPassword,
      address: this.state.address
    }
    fetch('/user/signup', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(bodyObj)
    })
    .then(r => r.json())
    .then((data) => {
      localStorage.setItem('token', data);
    })
    .catch(err => console.log(err));
  }

  updateInputFields(e) {
    this.setState({
      signupUsername: e.target.value,
      signupPassword: e.target.value,
      confirmPassword: e.target.value,
      address: e.target.value,
    });
  }


  render() {
    return (
      <div className="create-user">
        <h2>Create Account:</h2>
        <div className="input-field">
          <p>Username:</p>
          <input
            type="text"
            name="signupUsername"
            placeholder="signupUsername"
            value={this.state.signupUsername}
            onChange={this.updateInputFields.bind(this)} />
          <p>Password:</p>
          <input
            type="text"
            name="signupPassword"
            placeholder="signupPassword"
            value={this.state.signupPassword}
            onChange={this.updateInputFields.bind(this)} />
          <p>Confirm Password:</p>
          <input
            type="text"
            name="confirmPassword"
            placeholder="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.updateInputFields.bind(this)} />
          <address>Address:</address>
          <input
            type="text"
            name="address"
            placeholder="address"
            value={this.state.address}
            onChange={this.updateInputFields.bind(this)} />
        </div>
      <Link className='create' to="/home"><button> Submit </button></Link>
      </div>
    );
  }
}

export default CreateUser;
