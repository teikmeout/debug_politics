import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Results.css';
import Nav from '../Nav/Nav.jsx'

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
      <section>
      <Nav />
      <div className='results'>
        <div className='rep-cont'>
          <h3>{this.state.name} ({this.state.party})</h3>
          <img src={this.state.photoUrl} className='rep-img'/>
          <aside className='rep-info'>
            <a href={"http://facebook.com/" + this.state.channels[0].id}>Facebook: {this.state.channels[0].id}</a><br/>
            <a href={"http://twitter.com/" + this.state.channels[1].id}>@{this.state.channels[1].id}</a>
            <p>{this.state.address[0].line1}</p><p>{this.state.address[0].city}, {this.state.address[0].state}</p>
            <p>{this.state.address[0].zup}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ultrices ligula.</p>

          </aside>

        </div>
        <div className='rep-cont'>
          <h3>{this.state.name} ({this.state.party})</h3>
          <img src={this.state.photoUrl} className='rep-img'/>
          <aside className='rep-info'>
            <a href={"http://facebook.com/" + this.state.channels[0].id}>Facebook: {this.state.channels[0].id}</a><br/>
            <a href={"http://twitter.com/" + this.state.channels[1].id}>@{this.state.channels[1].id}</a>
            <p>{this.state.address[0].line1}</p><p>{this.state.address[0].city}, {this.state.address[0].state}</p>
            <p>{this.state.address[0].zup}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ultrices ligula.</p>

          </aside>

        </div>
        <div className='rep-cont'>
          <h3>{this.state.name} ({this.state.party})</h3>
          <img src={this.state.photoUrl} className='rep-img'/>
          <aside className='rep-info'>
            <a href={"http://facebook.com/" + this.state.channels[0].id}>Facebook: {this.state.channels[0].id}</a><br/>
            <a href={"http://twitter.com/" + this.state.channels[1].id}>@{this.state.channels[1].id}</a>
            <p>{this.state.address[0].line1}</p><p>{this.state.address[0].city}, {this.state.address[0].state}</p>
            <p>{this.state.address[0].zup}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ultrices ligula.</p>

          </aside>

        </div>
        <div className='rep-cont'>
          <h3>{this.state.name} ({this.state.party})</h3>
          <img src={this.state.photoUrl} className='rep-img'/>
          <aside className='rep-info'>
            <a href={"http://facebook.com/" + this.state.channels[0].id}>Facebook: {this.state.channels[0].id}</a><br/>
            <a href={"http://twitter.com/" + this.state.channels[1].id}>@{this.state.channels[1].id}</a>
            <p>{this.state.address[0].line1}</p><p>{this.state.address[0].city}, {this.state.address[0].state}</p>
            <p>{this.state.address[0].zup}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ultrices ligula.</p>

          </aside>

        </div>

        <div className='rep-cont'>
          <h3>{this.state.name} ({this.state.party})</h3>
          <img src={this.state.photoUrl} className='rep-img'/>
          <aside className='rep-info'>
            <a href={"http://facebook.com/" + this.state.channels[0].id}>Facebook: {this.state.channels[0].id}</a><br/>
            <a href={"http://twitter.com/" + this.state.channels[1].id}>@{this.state.channels[1].id}</a>
            <p>{this.state.address[0].line1}</p><p>{this.state.address[0].city}, {this.state.address[0].state}</p>
            <p>{this.state.address[0].zup}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ultrices ligula.</p>

          </aside>

        </div>


        <div className='rep-cont'>
          <h3>{this.state.name} ({this.state.party})</h3>
          <img src={this.state.photoUrl} className='rep-img'/>
          <aside className='rep-info'>
            <a href={"http://facebook.com/" + this.state.channels[0].id}>Facebook: {this.state.channels[0].id}</a><br/>
            <a href={"http://twitter.com/" + this.state.channels[1].id}>@{this.state.channels[1].id}</a>
            <p>{this.state.address[0].line1}</p><p>{this.state.address[0].city}, {this.state.address[0].state}</p>
            <p>{this.state.address[0].zup}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ultrices ligula.</p>

          </aside>

        </div>


        <div className='rep-cont'>
          <h3>{this.state.name} ({this.state.party})</h3>
          <img src={this.state.photoUrl} className='rep-img'/>
          <aside className='rep-info'>
            <a href={"http://facebook.com/" + this.state.channels[0].id}>Facebook: {this.state.channels[0].id}</a><br/>
            <a href={"http://twitter.com/" + this.state.channels[1].id}>@{this.state.channels[1].id}</a>
            <p>{this.state.address[0].line1}</p><p>{this.state.address[0].city}, {this.state.address[0].state}</p>
            <p>{this.state.address[0].zup}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ultrices ligula.</p>

          </aside>

        </div>

      </div>
    </section>
    )
  }
}

export default Results;
