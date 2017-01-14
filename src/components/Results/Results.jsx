import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Results.css';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
       "name": "Charles E. Schumer",
       "address": [
        {
         "line1": "322 Hart Senate Office Building",
         "city": "Washington",
         "state": "DC",
         "zip": "20510"
        }
       ],
       "party": "Democratic",
       "phones": [
        "(202) 224-6542"
       ],
       "urls": [
        "http://www.schumer.senate.gov/"
       ],
       "photoUrl": "http://www.schumer.senate.gov/imo/media/image/Charles_Schumer_official_portrait_small.jpg",
       "channels": [
        {
         "type": "Facebook",
         "id": "chuckschumer"
        },
        {
         "type": "Twitter",
         "id": "SenSchumer"
        },
        {
         "type": "YouTube",
         "id": "SenatorSchumer"
        }
       ]

    }
  }

  render() {

    return (
      <section className='results'>
        <div className='rep-cont'>
          <img src={this.state.photoUrl} className='rep-img'/>
          <aside className='rep-info'>
            <h3>{this.state.name} ({this.state.party})</h3>
            <a href={"http://facebook.com/" + this.state.channels[0].id}>Facebook: {this.state.channels[0].id}</a><br/>
            <a href={"http://twitter.com/" + this.state.channels[1].id}>@{this.state.channels[1].id}</a>
            <p>{this.state.address[0].line1}</p><p>{this.state.address[0].city}</p><p>{this.state.address[0].state}, {this.state.address[0].zup}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ultrices ligula. Etiam neque dui, tincidunt nec ullamcorper in, lobortis in nisl. Morbi blandit semper risus, id finibus nisl laoreet a. Phasellus eget vestibulum magna, vitae aliquam neque. Phasellus suscipit quis massa in varius. Mauris id turpis in tortor faucibus efficitur non vel nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ut rhoncus orci. Proin id condimentum ligula. Pellentesque placerat augue justo, et suscipit diam aliquet eget. Nulla eget odio ut ligula euismod tincidunt a non mauris. Aenean magna nisl, auctor vitae lorem at, ultrices efficitur eros. Ut tristique sem quis lorem ullamcorper facilisis. Aenean id leo augue.</p>

          </aside>

        </div>
      </section>
    )
  }

}

export default Results;
