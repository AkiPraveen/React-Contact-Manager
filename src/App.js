import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import logo from "./logo.svg";
import "./App.css";

// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    const name = "Larry";

    return (
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
