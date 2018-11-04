import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "555-555-5555"
        },
        {
          id: 2,
          name: "Utkarsh Tandon",
          email: "utpat@gmail.com",
          phone: "555-456-5555"
        },
        {
          id: 3,
          name: "Segway George",
          email: "segwayGeorge@gmail.com",
          phone: "555-444-5555"
        }
      ]
    };
  }

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id} // this 'key' is required for iterable loops
            contact={contact}
          />
        ))}
      </React.Fragment>
    );
  }
}
