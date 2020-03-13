var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
  // mode buttons listeners
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
  
      // squares to be choose from
      numSquares = this.textContent === "Easy" ? 3 : 6;
      reset();
    })
  }

  // square listeners
  for (let i = 0; i < squares.length; i++) {
    // add click listeners
    squares[i].addEventListener("click", function () {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
  
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play again?";
  
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }

  // set colors
  reset();
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new color
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;

  resetButton.textContent = "new colors"
  messageDisplay.textContent = "";

  // change color of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      // always show squares with color
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      // hide additional 3
      squares[i].style.display = "none";
    }

    h1.style.backgroundColor = "steelblue";
  }
}

resetButton.addEventListener("click", function () {
  reset();
})

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;

  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);

  return colors[random]
}

function generateRandomColors(num) {
  var colors = []

  for (let i = 0; i < num; i++) {
    color = randomColor()

    colors.push(color);
  }

  return colors
}

// pick a rgb color
function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`
}