const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = "1 Jan 2023";
function countdown(){
    const newYearsDate = new Date(newYears);
    const curentDate = new Date();
    const totalSeconds = (newYearsDate - curentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24); 
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)% 60;
    const seconds = Math.floor(totalSeconds)%60;
    
    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minsEl.innerHTML = mins;
   secondsEl.innerHTML = seconds;
}
//initial call
countdown();

setInterval(countdown,1000);    //The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.