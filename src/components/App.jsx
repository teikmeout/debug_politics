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
      activeOfficial: {},
    }
  }

  componentDidMount() {
    // this.officialsList();
  }

// function to change the state of official in results page when a representative is clicked.
  changeOfficial(official) {
    console.log(official)
    this.setState({
      activeOfficial: official,
    });
    browserHistory.push('/results')
  }

  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          officials: this.state.officials,
          // officialsList: this.officialsList.bind(this),
          activeOfficial: this.state.activeOfficial,
        })}
      </div>
    );
  }
}

export default App;
