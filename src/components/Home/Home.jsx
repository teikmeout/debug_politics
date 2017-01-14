import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

class Home extends Component {

  render() {
    return (
      <div className={styles['']}>
        <div className="log-in">
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.updateEmailForm.bind(this)}
          />

        </div>
      </div>
    )
  }
}

