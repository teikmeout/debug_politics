import React, {Component} from 'react';

class Official extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>official goes here</h1>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

export default Official;
