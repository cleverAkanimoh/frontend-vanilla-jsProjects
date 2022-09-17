const months = [
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
];
const weekdays = [
    'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
];

// getting date

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let d = new Date(2023, 1, 21, 11, 30);
const year = d.getFullYear();
const month = d.getMonth();
const day = d.getDay();
const date = d.getDate();
const hour = d.getHours();
const min = d.getMinutes();

giveaway.textContent = `giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${year}, ${hour}:${min}am`;

// future time in milliseconds

let futureTime = d.getTime();

const getRemainingTime = () => {
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60mins
    // 1d = 24hr

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate  values 
    let daysLeft = Math.floor(t / oneDay);
    let hoursLeft = Math.floor((t % oneDay) / oneHour);
    let minutesLeft = Math.floor((t % oneHour) / oneMinute);
    let secondsLeft = Math.floor((t % oneMinute) / 1000);

    // set values array

    const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft,];

    const format = (item) => {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    // display values in items 

    items.forEach((item, index) => {
        item.textContent = format(values[index])
    });
    if (t < 0 ) {
        clearInterval(interval);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired`;
        giveaway.textContent = `giveaway ended on ${weekdays[day]}, ${date} ${months[month]} ${year}, ${hour}:${min}am`;
    }
};

let interval = setInterval(getRemainingTime, 1000);
getRemainingTime(); 