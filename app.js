// variables for buttons
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// variables for time value
let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for loading zero
let loadingSeconds = 0;
let loadingMinutes = 0;
let loadingHours = 0;

// variables for set interval & timeStatus
let timeInterval = null;
let timeStatus = "stopped";

// stopwatch function
function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  if (minutes / 60 === 1) {
    minutes = 0;
    hours++;
  }

  if (seconds < 10) {
    loadingSeconds = "0" + seconds.toString();
  } else {
    loadingSeconds = seconds;
  }
  if (minutes < 10) {
    loadingMinutes = "0" + minutes.toString();
  } else {
    loadingMinutes = minutes;
  }
  if (hours < 10) {
    loadingHours = "0" + hours.toString();
  } else {
    loadingHours = hours;
  }

  let displayTimer = (document.getElementById(`timer`).innerHTML =
    loadingHours + ":" + loadingMinutes + ":" + loadingSeconds);
}

startStopBtn.addEventListener("click", () => {
  if (timeStatus === "stopped") {
    timeInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timeStatus = "running";
  } else {
    window.clearInterval(timeInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timeStatus = "stopped";
  }
});

resetBtn.addEventListener("click", () => {
  window.clearInterval(timeInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerHTML = "00:00:00";
  timeStatus = "stopped";
});
