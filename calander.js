let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
    const calendarGrid = document.getElementById("calendar-grid");
    const monthName = document.getElementById("month-name");

    // Set the month name
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    monthName.innerHTML = `${months[month]} ${year}`;

    // Get the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const firstDay = new Date(year, month).getDay();

    // Get the number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Get the number of days in the previous month (for wrapping around previous month's days)
    const previousMonthDays = new Date(year, month, 0).getDate();

    // Get the number of days in the next month (for wrapping to next month's days)
    const nextMonthDays = new Date(year, month + 1, 0).getDate();

    // Clear the calendar grid
    calendarGrid.innerHTML = "";

    // Determine how many days from the previous month need to be displayed, If the first day is Sunday, we don't need to display any previous month days
    const prevMonthDaysToShow = firstDay === 0 ? 0 : firstDay;

    // Create the previous month's days
    for (let i = prevMonthDaysToShow; i > 0; i--) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("calendar-day", "previous-month");
        dayDiv.innerText = previousMonthDays - i + 1;
        dayDiv.onclick = () => dayClicked(dayDiv);
        calendarGrid.appendChild(dayDiv);
    }

    // Create the days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("calendar-day");
        dayDiv.innerText = i;
        dayDiv.onclick = () => dayClicked(dayDiv);
        calendarGrid.appendChild(dayDiv);
    }

    // Handle the next month's days that belong to the same week as the last days of the current month
    const totalDaysInCurrentCalendar = firstDay + daysInMonth;
    const remainingDaysInWeek = 7 - (totalDaysInCurrentCalendar % 7);

    // Only display the next month's days if there are remaining days in the week
    for (let i = 1; i <= remainingDaysInWeek; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("calendar-day", "next-month");
        dayDiv.innerText = i;
        dayDiv.onclick = () => dayClicked(dayDiv);
        calendarGrid.appendChild(dayDiv);
    }
}

function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
}

function dayClicked(dayElement) {
    // Check if the clicked day is already selected
    if (dayElement.classList.contains("selected")) {
        dayElement.classList.remove("selected");
    } else {
        const selectedDay = document.querySelector(".calendar-day.selected");
        if (selectedDay) {
            selectedDay.classList.remove("selected");
        }
        dayElement.classList.add("selected");
    }
}


function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
}

function dayClicked(dayElement) {
    // Check if the clicked day is already selected
    if (dayElement.classList.contains("selected")) {
        dayElement.classList.remove("selected");
    } else {
        const selectedDay = document.querySelector(".calendar-day.selected");
        if (selectedDay) {
            selectedDay.classList.remove("selected");
        }
        dayElement.classList.add("selected");
    }
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

// Initialize calendar on page load
renderCalendar(currentMonth, currentYear);

// Random colour generator
const newColurBtnElement = document.getElementById('new-colour-button');

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomHexValue() {
    const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
    const randomHexValue = hexValues[randomIndexPosition];
    return randomHexValue;
}

function getRandomHexString(stringLength) {
    let hexString = '';
    for (let i = 0; i < stringLength; i++) {
        hexString += getRandomHexValue();
    }
    return hexString;
}

newColurBtnElement.addEventListener('click', () => {
    const randomHexString = '#' + getRandomHexString(6);
    const root = document.querySelector(':root');

    // Update the CSS variable --theme-colour
    document.documentElement.style.setProperty('--theme-colour', randomHexString);
});
