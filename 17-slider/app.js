const container = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const btnContainer = document.querySelector('.btn-container');

slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
});

let count = 0;

btnContainer.onclick = (e) => {
    items = e.target.classList;

    if (items.contains('nextBtn')) {
       count++;
       slideMove();
    } else if (items.contains('prevBtn')) {
        count--;
        slideMove();
    }
    
}

const slideMove = () => {
    if (count > slides.length - 1){
        count = 0;
    } else if (count < 0 ) {
        count = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    })
}