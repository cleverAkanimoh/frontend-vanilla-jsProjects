const sliderInner = document.querySelector('.slider-inner');
const slider = document.querySelector('.slider');

let pressed = false;
let startX;
let x;

slider.onmousedown =
    (e) => {
        pressed = true;
        startX = e.offsetX - sliderInner.offsetLeft;
        slider.style.cursor = 'grabbing';
    }

slider.onmouseenter =
    () => {
        slider.style.cursor = 'grab';
    }

slider.onmouseup =
    () => {
        slider.style.cursor = 'grab';
    }

window.onmouseup =
    () => {
        pressed = false;
    }

slider.onmousemove =
    (e) => {
        if (!pressed) return;
        e.preventDefault();

        x = e.offsetX

        sliderInner.style.left = `${x - startX}px`;

        checkEndOfPage();
    }

checkEndOfPage = () => {
    let outer = slider.getBoundingClientRect();

    let inner = sliderInner.getBoundingClientRect();

    if (parseInt(sliderInner.style.left) > 0) {
        sliderInner.style.left = '10px';
    }
    if (inner.right < outer.right) {
        sliderInner.style.left = `-${inner.width - outer.width + 10}px`
    };
};