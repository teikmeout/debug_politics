import React, {Component} from 'react';
import './Official.css';

class Official extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <img src={this.props.img} className="rep-img" height="50px" width="50px"/>
        <h3 className='trial' >{this.props.name}</h3>
      </div>
    )
  }
}

export default Official;
