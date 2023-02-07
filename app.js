setInterval(setClock, 1000);

const handHour = document.querySelector('[data-hand-hour]');
const handMinute = document.querySelector('[data-hand-minute]');
const handSecond = document.querySelector('[data-hand-second]');

function setClock () {
    const currentDate = new Date();

    const ratioSecond = currentDate.getSeconds() / 60;
    const ratioMinute = (currentDate.getMinutes() + ratioSecond) / 60;
    const ratioHour = (currentDate.getHours() + ratioMinute) / 12;

    rotate(handSecond, ratioSecond);
    rotate(handMinute, ratioMinute);
    rotate(handHour, ratioHour);
}

function rotate (element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock()