const modal = document.querySelector('.modal-overlay');
const close = document.querySelector('.close-btn');
const open = document.querySelector('.modal-btn');


const openModal = () => {
    modal.classList.add('open-modal')
    close.onclick = () => { modal.classList.remove('open-modal') }
}
open.onclick = openModal;