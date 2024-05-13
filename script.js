function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const locationElement = document.getElementById('location');
    
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const timeString = now.toLocaleTimeString('en-US', options);
    clockElement.textContent = timeString;

    const dateString = now.toDateString();
    dateElement.textContent = dateString;

    // For demonstration purposes, let's assume the location is fixed.
    const location = "Ecuador";
    locationElement.textContent = location;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock when the page loads
updateClock();
