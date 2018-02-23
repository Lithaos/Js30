var secondHand = document.querySelector('.second-hand');
var minsHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
