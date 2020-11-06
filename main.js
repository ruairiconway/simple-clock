const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    //seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (seconds === 0) {
        secHand.style.transition = `all 0s`;
        secHand.style.transform = `rotate(90deg)`;
    } else {
        secHand.style.transition = `all 0.05s`;
        secHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }

    //minutes
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    if  (minutes === 0) {
        minHand.style.transition = `all 0s`;
        minHand.style.transform = `rotate(90deg)`;
    } else {
        minHand.style.transition = `all 0.05s`;
        minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    }

    //hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    if  (hours === 0) {
        hourHand.style.transition = `all 0s`;
        hourHand.style.transform = `rotate(90deg)`;
    } else {
        hourHand.style.transition = `all 0.05s`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    //time logged
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(setDate, 1000);