import React, { Component } from 'react';
import { Link } from 'react-router';
import NewsArticles from './NewsArticles/NewsArticles.jsx';
import styles from './Home.css';
import Official from './Official.jsx'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getOfficialsByAddress();
  }

  renderOfficialList() {
    return this.props.officials.map((official, i) => {
      return (
        <Official
          key={i}
          official={official}
          name={official.name}
          party={official.party}
          img={official.photoUrl}
        />
      )
    });
  }

  render() {
    return (
      <div className={styles['']}>
        <div className="official-list" onClick={() => this.props.clickMethod(props.official)}>
        <h1 >This is where the official list will live</h1>
        {this.renderOfficialList()}
        <NewsArticles />
        </div>
      </div>
    );
  }
}

export default Home;
