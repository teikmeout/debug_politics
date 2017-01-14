import React, { Component } from 'react';
import styles from './NewsArticles.css';

const NewsArticles = props => (
  <div className="news-articles" onClick={() => props.clickMethod(props.item)}>
    <div className="official-details">
      <h1>This is the list of the news articles based on user location</h1>
      <h2>{props.name}</h2>
      <h3>{props.party}</h3>
    </div>
  </div>
);

export default NewsArticles;
