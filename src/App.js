import React, { Component, Fragment } from "react";
import FancyBackground from "./components/FancyBackground";
import MainContent from "./components/MainContent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <FancyBackground />
        <MainContent />
      </Fragment>
    );
  }
}

export default App;
