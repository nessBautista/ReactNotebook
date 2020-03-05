import React, { Component } from "react";
import Contact from "./Components/Contact";
import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div>
          <Contact
            name="John Doe"
            email="jdoe@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Karen Smith"
            email="karen@gmail.com"
            phone="555-555-3333"
          />
        </div>
      </div>
    );
  }
}

export default App;
