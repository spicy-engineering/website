import { Component } from "react";

class WindowSize extends Component {
  static getWindowSize = () => ({
    height: window.innerHeight,
    width: window.innerWidth
  });

  state = this.constructor.getWindowSize();

  componentDidMount = () =>
    window.addEventListener("resize", this.handleWindowResize);

  componentWillUnmount = () =>
    window.removeEventListener("resize", this.handleWindowResize);

  handleWindowResize = () => this.setState(this.constructor.getWindowSize);

  render = () => this.props.children(this.state);
}

export default WindowSize;
