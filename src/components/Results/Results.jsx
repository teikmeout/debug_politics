import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Results.css';

class Results extends Component {

  render() {
    return (
      <div className="official-page" onClick={() => props.clickMethod(props.official)}>
        <div className="official-details">

        </div>
      </div>
    );
  }
}

export default Results;

