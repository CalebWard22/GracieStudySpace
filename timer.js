// Variables
let timerElement = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let increaseTimeBtn = document.getElementById('increaseTime');
let decreaseTimeBtn = document.getElementById('decreaseTime');
let currentTimeDisplay = document.getElementById('currentTime');

let countdown;
let isRunning = false;
let timeLeft;  // Dynamic timeLeft based on user selection

// Create an Audio object to play the tone when time's up
const tone = new Audio('tone.mp3'); // Make sure 'tone.mp3' is in the correct path

// Function to update the timer display
function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Format the time (e.g., 25:00)
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    timerElement.textContent = `${minutes}:${seconds}`;
    currentTimeDisplay.textContent = minutes;  // Update the displayed time
}

// Function to increase the time by 1 minute
increaseTimeBtn.addEventListener('click', function () {
    timeLeft += 60; // Add 60 seconds (1 minute)
    updateTimerDisplay();  // Update the display immediately
});

// Function to decrease the time by 1 minute
decreaseTimeBtn.addEventListener('click', function () {
    if (timeLeft > 60) {  // Prevent time from going below 1 minute
        timeLeft -= 60; // Subtract 60 seconds (1 minute)
        updateTimerDisplay();  // Update the display immediately
    }
});

// Start button functionality
startBtn.addEventListener('click', function () {
    if (isRunning) {
        clearInterval(countdown); // Stop the timer if already running
    } else {
        countdown = setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert("Time's up!");  // Optionally show a message
                return;
            }
            if (timeLeft === 1) {
                tone.play(); } // Play the tone 2 seconds before the timer reaches zero
            timeLeft--;
            updateTimerDisplay();
        }, 1000); // Update every second
    }

    isRunning = !isRunning; // Toggle the isRunning state
    startBtn.textContent = isRunning ? 'Pause' : 'Start'; // Toggle start/pause button text
});

// Reset button functionality
resetBtn.addEventListener('click', function () {
    clearInterval(countdown);
    timeLeft = 25 * 60; // Reset to 25 minutes by default
    updateTimerDisplay();
    startBtn.textContent = 'Start';
    isRunning = false;
});

// Set the initial timer duration on page load
timeLeft = 25 * 60; // Default timer is set to 25 minutes
updateTimerDisplay();


