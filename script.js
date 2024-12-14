// Function to update the clock hands for a specific country
function updateClock(clockId, time) {
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const hourDegree = (hour % 12) * 30 + (minute / 2); // 360 degrees / 12 hours = 30 degrees per hour
    const minuteDegree = minute * 6; // 360 degrees / 60 minutes = 6 degrees per minute
    const secondDegree = second * 6; // 360 degrees / 60 seconds = 6 degrees per second

    document.querySelector(`#hour-hand-${clockId}`).style.transform = `rotate(${hourDegree}deg)`;
    document.querySelector(`#minute-hand-${clockId}`).style.transform = `rotate(${minuteDegree}deg)`;
    document.querySelector(`#second-hand-${clockId}`).style.transform = `rotate(${secondDegree}deg)`;
}

// Function to update all clocks
function updateAllClocks() {
    const bangladeshTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
    updateClock("bangladesh", new Date(bangladeshTime));

    const usaTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    updateClock("usa", new Date(usaTime));

    const ukTime = new Date().toLocaleString("en-US", { timeZone: "Europe/London" });
    updateClock("uk", new Date(ukTime));

    const indiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    updateClock("india", new Date(indiaTime));

    const australiaTime = new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" });
    updateClock("australia", new Date(australiaTime));

    const japanTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
    updateClock("japan", new Date(japanTime));

    const germanyTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin" });
    updateClock("germany", new Date(germanyTime));
}

// Update clocks every second
setInterval(updateAllClocks, 1000);
