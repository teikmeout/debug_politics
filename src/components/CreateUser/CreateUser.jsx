import React,  { Component }from 'react';
import { Link, browserHistory } from 'react-router';
import styles from './CreateUser.css';
import Nav from '../Nav/Nav.jsx'

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signupUsername: '',
      signupPassword: '',
      signupConfirm: '',
      address: '',
    }
  }

  createUser() {
    fetch('/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        signupUsername: this.state.signupUsername,
        signupPassword: this.state.signupPassword,
        signupConfirm: this.state.signupConfirm,
        address: this.state.address
      })
    })
    .then((data) => {
      console.log(data)
      localStorage.setItem('token', data);
    })
    .catch(err => console.log(err));
  }

  updateInputFields(e) {
    let inputArray = e.target.parentElement.childNodes;
    this.setState({
      signupUsername: inputArray[1].value,
      signupPassword: inputArray[3].value,
      signupConfirm: inputArray[5].value,
      address: inputArray[7].value,
    }, () => {
      console.log(this.state)
    });
  }


  render() {
    return (
      <div className="create-user-cont">
        <Nav />
        <div className="create-user">
          <h2>Create Account:</h2>
          <div className="input-field">
            <p>Username:</p>
            <input
              type="text"
              name="signupUsername"
              placeholder="signupUsername"
              onChange={this.updateInputFields.bind(this)} />
            <p>Password:</p>
            <input
              type="password"
              name="signupPassword"
              placeholder="signupPassword"
              onChange={this.updateInputFields.bind(this)} />
            <p>Confirm Password:</p>
            <input
              type="password"
              name="signupConfirm"
              placeholder="signupConfirm"
              onChange={this.updateInputFields.bind(this)} />
            <address>Address:</address>
            <input
              type="text"
              name="address"
              placeholder="address"
              onChange={this.updateInputFields.bind(this)} />
          </div>
        <Link className='create' to="/home"><button onClick={this.createUser.bind(this)}> Submit </button></Link>
        </div>

      </div>
    );
  }
}

export default CreateUser;
