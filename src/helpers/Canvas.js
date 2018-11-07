import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

class CanvasComponent extends Component {
  static propTypes = {
    contextType: PropTypes.oneOf(["2d", "3d"])
  };

  static defaultProps = {
    contextType: "2d"
  };

  canvasRef = createRef();

  componentDidMount() {
    this.renderInitialFrame();
    this.startAnimation();
  }

  componentWillReceiveProps(newProps) {
    if (
      newProps.width !== this.props.width ||
      newProps.height !== this.props.height
    ) {
      this.renderInitialFrame(newProps);
    }
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  renderInitialFrame({ contextType, ...props } = this.props) {
    this.canvasCtx = this.canvasRef.current.getContext(contextType);
    if (this.initialRender) {
      this.setup = this.initialRender(this.canvasCtx, props);
    }
  }

  startAnimation() {
    if (this.renderFrame) {
      const canvasCtx = this.canvasRef.current.getContext(
        this.props.contextType
      );
      this.timer = requestAnimationFrame(() => {
        if (canvasCtx) {
          this.renderFrame(canvasCtx, this.props, this.setup);
        }
        this.startAnimation();
      });
    }
  }

  stopAnimation() {
    if (this.timer) {
      cancelAnimationFrame(this.timer);
    }
    this.timer = null;
  }

  render() {
    const { width, height } = this.props;
    return <canvas ref={this.canvasRef} width={width} height={height} />;
  }
}

export default CanvasComponent;
