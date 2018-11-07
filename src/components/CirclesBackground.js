import PropTypes from "prop-types";
import CanvasComponent from "../helpers/Canvas";

class CirclesBackground extends CanvasComponent {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    amount: PropTypes.number,
    layer: PropTypes.number,
    color: PropTypes.arrayOf(PropTypes.number),
    alpha: PropTypes.number,
    speed: PropTypes.number,
    angle: PropTypes.number
  };

  initialRender(
    canvas,
    { amount, layer, width, height, color, alpha, speed, angle }
  ) {
    const circles = Array(amount / layer)
      .fill()
      .map((x, i) =>
        Array(layer)
          .fill()
          .map((y, j) => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * (20 + j * 10) * 2,
            color,
            alpha: Math.random() * 0.2 + (alpha - j * 0.1),
            speed: speed * (1 + j * Math.random())
          }))
      )
      .reduce((acc, x) => acc.concat(x), []);
    const degree = (angle / 360) * Math.PI * 2;
    const cos = Math.cos(degree);
    const sin = Math.sin(degree);
    return { circles, cos, sin };
  }

  renderFrame(canvas, { width, height, color, alpha }, { circles, cos, sin }) {
    canvas.clearRect(0, 0, width, height);
    circles.forEach(item => {
      let { x, y, radius, speed } = item;
      if (x > width + radius) {
        x = -radius;
      } else if (x < -radius) {
        x = width + radius;
      } else {
        x += sin * speed;
      }

      if (y > height + radius) {
        y = -radius;
      } else if (y < -radius) {
        y = height + radius;
      } else {
        y -= cos * speed;
      }

      item.x = x;
      item.y = y;

      const gradient = canvas.createRadialGradient(x, y, radius, x, y, 0);
      gradient.addColorStop(0, `rgba(${color.join(",")},${alpha})`);
      gradient.addColorStop(1, `rgba(${color.join(",")},${alpha - 0.3})`);

      canvas.beginPath();
      canvas.arc(x, y, radius, 0, Math.PI * 2, true);
      canvas.fillStyle = gradient;
      canvas.fill();
    });
  }
}

export default CirclesBackground;
