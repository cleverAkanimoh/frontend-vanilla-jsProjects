const linkContainer = document.querySelector('.container');
const link = document.querySelectorAll('.list');
const indicator = document.querySelector('.indicator');
const index = [0,1,2,3,4]


const activeLink = (e) => {

    link.forEach((item) => {
        item.classList.remove('active');
        e.currentTarget.classList.add('active');
    });
    
};

link.forEach((item) => {
    item.onclick = activeLink;
});