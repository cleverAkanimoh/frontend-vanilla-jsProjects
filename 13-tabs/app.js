const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.onclick = e => {
    let id = e.target.dataset.id;
    if (id) {
        // remove active from other buttons
        btns.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
            console.log(btns, btn);
        });

        // hide all articles then display all ids
        articles.forEach((article) => {
            article.classList.remove('active');
        });
        let element = document.getElementById(id);
        element.classList.add('active');
    }
};