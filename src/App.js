import React, { Component } from "react";
import logo from "./logo.svg";
import PingComponent from "./ping_component/ping_component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PingComponent />
      </div>
    );
  }
}

export default App;
