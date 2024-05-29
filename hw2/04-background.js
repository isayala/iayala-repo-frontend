// Add your code here
let intervalId;
let backgroundColorInterval = 3000;

const button = document.getElementById("startstop");
const input = document.getElementById("seconds");

function startBackgroundColorChange() {
  clearInterval(intervalId);
  intervalId = setInterval(changeBackgroundColor, backgroundColorInterval);
  button.value = "Stop";
  button.classList.remove("bg-primary");
  button.classList.add("bg-danger");
}

function stopBackgroundColorChange() {
  clearInterval(intervalId);
  button.value = "Start";
  button.classList.remove("bg-danger");
  button.classList.add("bg-primary");
}

function changeBackgroundColor() {
  const randomColor = generateRandomColor();
  document.body.style.backgroundColor = randomColor;
}

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const alpha = 0.5; // Dimming the alpha value
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

button.addEventListener("click", function () {
  if (button.value === "Start") {
    startBackgroundColorChange();
  } else {
    stopBackgroundColorChange();
  }
});

input.addEventListener("input", function () {
  const newValue = parseInt(input.value);
  if (!isNaN(newValue) && newValue > 0) {
    backgroundColorInterval = newValue * 1000; // Convert seconds to milliseconds
    if (intervalId) {
      startBackgroundColorChange();
    }
  }
});

// Start background color change initially
startBackgroundColorChange();
