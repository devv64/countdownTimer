const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const today = new Date()
goalDate = new Date('June 4 ' + today.getFullYear())
if(today > goalDate){
    goalDate = goalDate.setFullYear(goalDate.getFullYear() + 1);
}

function countdown(){
    const endDate = new Date(goalDate);
    const currentDate = new Date();

    const totalSeconds = new Date(endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);