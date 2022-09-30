// text effect

const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split('');
text.innerHTML = ''
splitText.forEach(txt=>{
    text.innerHTML += `<span>${txt}</span> `
})

let char = 0;

const ontick = () => {
    let span = text.querySelectorAll('span')[char];
    span.classList.add('fade')
    char++
    if (char === splitText.length){
        complete();
        return;
    }
}

const complete = () => {
    clearInterval(timer);
}

let timer = setInterval(ontick, 50)

// onscroll effect

const textScroll = () => {
    const scrolltext = document.querySelector('.text');
    let scrollPosition = scrolltext.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    // console.log()
    if (scrollPosition < screenPosition){
        scrolltext.classList.add('show');
    } else {
        scrolltext.classList.remove('show');
    }
}

window.onscroll = () => {
    textScroll();
} 