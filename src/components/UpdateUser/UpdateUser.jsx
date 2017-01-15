import React, {Component} from 'react';
import './UpdateUser.css';

class UpdateUser extends Component {
  // this is dummy state to change
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
      l_name: 'Kennedy',
      address: {
        street: 'Rio San Martin 722',
        street2: 'Colonia del Valle Norte',
        city: 'San Pedro',
        state: 'Nuevo Leon',
        zip: '100201',
      },
      email: 'j.kennedy@me.com',
    } // end of state
  } // end of constructor

  render() {
    return(
      <div className="update">
        <section className="update-container">
          <h3>Update your information</h3>
          <input
            type="text"
            placeholder={this.state.name}
          /><br/>
          <input
            type="text"
            placeholder={this.state.l_name}
          /><br/>
          <p>Address</p>
          <input
            type="text"
            placeholder={this.state.address.street}
          /><br/>
          <input
            type="text"
            placeholder={this.state.address.street2}
          /><br/>
          <input
            type="text"
            placeholder={this.state.address.city}
          /><br/><input
            type="text"
            placeholder={this.state.address.zip}
          /><br/>
          <button className="updt-submit">Save Changes</button>
        </section>
      </div>
    )
  }

} // end of class


export default UpdateUser
