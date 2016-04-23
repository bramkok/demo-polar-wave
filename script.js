const size = Math.min(window.innerWidth / 10, 26);
const length = size * 1.0;
const thickness = 4.0;

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const margin = Math.min(window.innerWidth, window.innerHeight) * 0.33;

let step = 0;

function update() {
  requestAnimationFrame(update);

  step += 2.8;

  context.clearRect(0, 0, width, height);
  context.fillStyle = '#5f819d';

  const cols = Math.floor((width - margin * 2) / size);
  const rows = Math.floor((height - margin * 2) / size);

  const ox = (width - (cols * size)) / 2;
  const oy = (height - (rows * size)) / 2.2;

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const px = ox + x * size;
      const py = oy + y * size;
      const a = ((x + y) / 10) + (step / 75);

      context.save();
      context.translate(px + size / 2, py + size / 2);
      context.rotate(a + Math.sin(a) - Math.PI / 2);
      context.translate(0, 10);
      context.fillRect(0, - thickness / 2, length, thickness / 2);
      context.restore();
    }
  }
}

requestAnimationFrame(update);
