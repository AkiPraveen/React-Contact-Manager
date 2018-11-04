import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    return (
      <div className="card card-body mb-3">
        <h4> {this.props.name} </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {this.props.email} </li>
          <li className="list-group-item">Ph #: {this.props.phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.PropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;