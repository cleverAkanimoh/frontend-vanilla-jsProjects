let count = 1;

setInterval(() => {
    let radio = document.querySelector(`#radio${count}`);
    radio.checked = true;
    count++
    if (count > 14) {
        count = 1;
    };
}, 5000);