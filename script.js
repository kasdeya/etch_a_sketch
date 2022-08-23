const DEFAULT_SIZE = 16
const DEFAULT_COLOR = '#333'
let currentSize = DEFAULT_SIZE
let currentColor = DEFAULT_COLOR


const colorPicker = document.getElementById('colorPicker')
const container = document.getElementById("container");
const clear = document.getElementById("clear");
const sizeSlider = document.getElementById('sizeSlider')
let squares = document.getElementsByClassName("grid-item");
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)
colorPicker.oninput = (e) => setCurrentColor(e.target.value)

function setCurrentSize(newSize) {
  currentSize = newSize
}

function setCurrentColor(newColor) {
  currentColor = newColor
Array.prototype.forEach.call(squares, (square) => {
square.style.setProperty('--grid-background-color', `${currentColor}`);
});
}

clear.addEventListener('click', function() {
  clearGrid();
  reloadGrid();
})

function clearGrid() {
  container.innerHTML = ''
}
function reloadGrid() {
  clearGrid()
  makeRows(currentSize, currentSize)
}
function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function makeRows(size, size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`
  for (c = 0; c < (size * size); c++) {
    const cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
  Array.prototype.forEach.call(squares, (square) => {
    square.setAttribute('draggable', false);
  })
    changeColor()
};

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor() {
Array.prototype.forEach.call(squares, (square) => {
  square.addEventListener('mouseover', () => {
    if(mouseDown) {
    square.style.backgroundColor = currentColor;
    }
    });
  square.addEventListener('click', () => {
        square.style.backgroundColor = currentColor;
    })
});
}

window.addEventListener('mouseup', () => {
  mouseDown = false;
});

const griditems = document.querySelectorAll('grid-item');

window.onload = () => {
  makeRows(DEFAULT_SIZE, DEFAULT_SIZE)
}
