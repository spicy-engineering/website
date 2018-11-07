import CanvasComponent from "../helpers/Canvas";

class LinesBackground extends CanvasComponent {
  initialRender(canvas, { width, height, amount, layer, color, speed, angle }) {
    const lines = Array(amount / layer)
      .fill()
      .map((x, i) =>
        Array(layer)
          .fill()
          .map((y, j) => ({
            x: Math.random() * width,
            y: Math.random() * height,
            width: Math.random() * (20 + j * 5) * 2,
            color,
            speed: speed * (1 + j * 0.5)
          }))
      )
      .reduce((acc, curr) => acc.concat(curr), []);
    const degree = (angle / 360) * Math.PI * 2;
    const cos = Math.cos(degree);
    const sin = Math.sin(degree);
    return { lines, cos, sin };
  }

  renderFrame(canvas, { width, height, color, alpha }, { lines, cos, sin }) {
    canvas.clearRect(0, 0, width, height);
    lines.forEach(item => {
      let { x, y, width: lineWidth, speed } = item;
      if (x > width + lineWidth * sin) {
        x = -lineWidth * sin;
      } else if (x < -lineWidth * sin) {
        x = width + lineWidth * sin;
      } else {
        x += sin * speed;
      }

      if (y > height + lineWidth * cos) {
        y = -lineWidth * cos;
      } else if (y < -lineWidth * cos) {
        y = height + lineWidth * cos;
      } else {
        y -= cos * speed;
      }

      item.x = x;
      item.y = y;

      const endX = x + sin * width;
      const endY = y - cos * width;

      const gradient = canvas.createLinearGradient(x, y, endX, endY);
      gradient.addColorStop(0, `rgba(${color.join(",")},${alpha})`);
      gradient.addColorStop(1, `rgba(${color.join(",")},${alpha - 0.1})`);

      canvas.beginPath();
      canvas.moveTo(x, y);
      canvas.lineTo(endX, endY);
      canvas.lineWidth = 3;
      canvas.lineCap = "round";
      canvas.strokeStyle = gradient;
      canvas.stroke();
    });
  }
}

export default LinesBackground;
