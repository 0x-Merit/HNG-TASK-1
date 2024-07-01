document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        currentTimeUTC.textContent = `CurrentTime (UTC) : ${utcTime}`;
    }
    
    function updateDay() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = days[now.getUTCDay()];
        currentDay.textContent = `CurrentDay : ${day}`;
    }
    
    updateTime();
    updateDay();
    setInterval(updateTime, 1000); // Update the time every second
});