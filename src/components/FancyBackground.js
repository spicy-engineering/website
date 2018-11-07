import React from "react";
import WindowSize from "../helpers/WindowSize";
import GradientBackground from "./GradientBackground";
import CirclesBackground from "./CirclesBackground";
import LinesBackground from "./LinesBackground";

const gradients = [
  {
    size: [0.3, 0.1, 0, 0.3, 0.1, 0.9],
    stops: [[0, "rgb(0, 26, 77)"], [1, "transparent"]]
  },
  {
    size: [0.1, 0.1, 0, 0.3, 0.1, 1],
    stops: [[0, "rgb(0, 150, 240)"], [1, "transparent"]]
  },
  {
    size: [0.1, 0.5, 0, 0.1, 0.5, 0.5],
    stops: [[0, "rgb(40, 20, 105)"], [1, "transparent"]]
  }
];

const FancyBackground = ({ width, height }) => (
  <WindowSize>
    {({ width, height }) => (
      <div style={{ position: "absolute", top: 0, left: 0, width, height }}>
        <LinesBackground
          width={width}
          height={height}
          amount={32}
          layer={8}
          color={[255, 255, 255]}
          alpha={0.1}
          angle={20}
          speed={0.3}
        />
        <CirclesBackground
          width={width}
          height={height}
          angle={20}
          amount={30}
          layer={3}
          color={[157, 97, 207]}
          speed={0.3}
          alpha={0.3}
        />
        <GradientBackground
          width={width}
          height={height}
          gradients={gradients}
          alpha={0.3}
          color={[255, 255, 255]}
        />
      </div>
    )}
  </WindowSize>
);

export default FancyBackground;
