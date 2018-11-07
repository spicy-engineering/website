import CanvasComponent from "../../helpers/Canvas";

class GradientBackground extends CanvasComponent {
  initialFrame() {
    const {
      canvas,
      props: { width, height, gradients }
    } = this;
    canvas.clearRect(0, 0, width, height);

    gradients.forEach(({ size, stops }, index) => {
      const gradient = canvas.createRadialGradient(
        width * size[0],
        height * size[1],
        width * size[2],
        width * size[3],
        height * size[4],
        width * size[5]
      );
      stops.forEach(stop => gradient.addColorStop(...stop));

      canvas.translate(width, 0);
      canvas.scale(-1, 1);
      canvas.beginPath();
      canvas.fillStyle = gradient;
      canvas.fillRect(0, 0, width, height);
    });
  }
}

export default GradientBackground;
