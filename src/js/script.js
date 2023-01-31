let btnTrailer = document.querySelector('.botao-trailer');
let modal = document.querySelector('.modal');
let btnCloseModal = document.querySelector('.fechar-modal');
let video = document.querySelector('#video');

btnTrailer.addEventListener('click', () => {
    modal.style.visibility = 'visible';
})

btnCloseModal.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
})