const date = document.querySelector('#date');
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navbar = document.querySelector('#nav');


date.innerText = new Date().getFullYear();

// nav toggle

navToggle.onclick = () => {
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
};

// fixed navbar 
const topLink = document.querySelector('.top-link');
window.onscroll = () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500 ) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
};

// smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    link.onclick = (e) => {
        e.preventDefault();
        // navigte to a specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position = position - navHeight - 10;
        }
        if (navHeight > 82) {
            position = position + containerHeight - 20
        }
        
        window.scrollTo({
            left:0,
            top: position,
        });
        linksContainer.style.height = 0;
    };
});