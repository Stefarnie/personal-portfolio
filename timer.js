// selecting all input elements
const hoursInputElement = document.getElementById('hoursInput');
const minutesInputElement = document.getElementById('minutesInput');
const secondsInputElement = document.getElementById('secondsInput');

// selecting all output elements
const hoursOutputElement = document.getElementById('hoursOutput');
const minutesOutputElement = document.getElementById('minutesOutput');
const secondsOutputElement = document.getElementById('secondsOutput');

// selecting element for the button
const startTimerButtonelement = document.querySelector('.startTimer');

let targetTime;
let timerInterval;

// calculation code for the timer 
const updateTimer = () => {
    if (targetTime) {
        const differenceInSeconds = Math.floor((targetTime - Date.now()) / 1000);

        // Check if the time is over
        if (differenceInSeconds <= 0) {
            clearInterval(timerInterval);
            hoursOutputElement.textContent = "0 hours";
            minutesOutputElement.textContent = "0 minutes";
            secondsOutputElement.textContent = "0 seconds";
            return;
        }

        const hours = Math.floor(differenceInSeconds / 3600);
        const minutes = Math.floor((differenceInSeconds % 3600) / 60);
        const seconds = differenceInSeconds % 60;

        hoursOutputElement.textContent = `${hours} hours`;
        minutesOutputElement.textContent = `${minutes} minutes`;
        secondsOutputElement.textContent = `${seconds} seconds`;
    }
};

// Set up the timer interval
const startTimer = () => {
    const futureHours = parseInt(hoursInputElement.value);
    const futureMinutes = parseInt(minutesInputElement.value);
    const futureSeconds = parseInt(secondsInputElement.value);

    const date = new Date();
    date.setHours(date.getHours() + futureHours);
    date.setMinutes(date.getMinutes() + futureMinutes);
    date.setSeconds(date.getSeconds() + futureSeconds);

    targetTime = date.getTime();

    // Clear any previous intervals
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Start a new interval
    timerInterval = setInterval(updateTimer, 1000);

    updateTimer();
};

// Add event listener to start the timer
startTimerButtonelement.addEventListener('click', startTimer);

// Initial call to ensure the timer is updated
updateTimer();

