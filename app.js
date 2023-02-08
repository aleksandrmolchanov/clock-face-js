setInterval(setClock, 1000);

const handHour = document.querySelector('[data-hand-hour]');
const handMinute = document.querySelector('[data-hand-minute]');
const handSecond = document.querySelector('[data-hand-second]');
const blockTime = document.querySelector('[data-time]');
const blockDay = document.querySelector('[data-day]');
const blockDate = document.querySelector('[data-date]');

function setClock () {
    const currentDate = new Date();

    const month = currentDate.getMonth();
    const dayOfMonth = currentDate.getDate();
    const dayOfWeek = currentDate.getDay();
    const hours = currentDate.getHours();
    const meridiem = hours > 12 ? 'PM' : 'AM';
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    setClockAnalog(hours, minutes, seconds);
    setClockDigital(month, dayOfMonth, dayOfWeek, hours, meridiem, minutes, seconds);
}

function setClockAnalog (hours, minutes, seconds) {
    const ratioSecond = seconds / 60;
    const ratioMinute = (minutes + ratioSecond) / 60;
    const ratioHour = (hours + ratioMinute) / 12;

    rotate(handSecond, ratioSecond);
    rotate(handMinute, ratioMinute);
    rotate(handHour, ratioHour);
}

function setClockDigital (month, dayOfMonth, dayOfWeek, hours, meridiem, minutes, seconds) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (hours > 12) {
        hours -= 12;
    }

    blockTime.innerText = `${hours}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)} ${meridiem}`;
    blockDay.innerText = daysOfWeek[dayOfWeek];
    blockDate.innerText = monthNames[month] + ' ' + dayOfMonth;
}

function addLeadingZero (number) {
    return (number < 10 ? '0' : '') + number;
}

function rotate (element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock()