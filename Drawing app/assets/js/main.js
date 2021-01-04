// Looks for HTML tags
const clearButton = document.querySelector('.clear');
const stroke_weight = document.querySelector('.stroke-weight');
const color_picker = document.querySelector('.color-picker');

const canvas = document.querySelector('canvas');
// Returns drawing context on the canvas
const ctx = canvas.getContext('2d');
let isDrawing = false;

// Invokes drawing functions
canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

// Invokes the board clear function
clearButton.addEventListener('click', clearCanvas);

// Start function changes condition of drawing to true and invokes drawing function
function start (e) {
  isDrawing = true;
  draw(e);
}

// Invokes frontend of canvas. X and Y are coordinates and this function will
// draw color onto the canvas.
function draw ({clientX: x, clientY: y}) {
  if (!isDrawing) return;
  ctx.lineWidth = stroke_weight.value;

  /* options:
  Round: the drawing cursor will ink out a round shape
  Square: the drawing cursor will ink out a square shape
  */ 
  ctx.lineCap = "round";
  // Collects the color from the main.css file reference line 26
  ctx.strokeStyle = color_picker.value;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function stop () {
  isDrawing = false;
  ctx.beginPath();
}

function clearCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();