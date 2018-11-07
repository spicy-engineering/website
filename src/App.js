import React, { Component, Fragment } from "react";
import Background from "./components/background";
import MainContent from "./components/MainContent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Background />
        <MainContent />
      </Fragment>
    );
  }
}

export default App;
