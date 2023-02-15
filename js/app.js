// ADD SECTION
const carosello = document.createElement('section');

// ARRAY IMMAGINI
const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfh73DIdzzaYX8LxezWX-G4G2uFA4-78bAA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CSuKAbbfXdwNJqZlrFJ6t5opoOPNYEiZ_g&usqp=CAU',
    'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://picsum.photos/536/354'
];

// ADD CONTAINER
const container = document.createElement('div');
container.classList.add('container-sm', 'py-5');
carosello.innerHTML += `
    <div class="container-sm py-5">
        <div class="slide none active"><img src="${images[0]}" alt=""></div>
        <div class="slide none"><img src="${images[1]}" alt=""></div>
        <div class="slide none"><img src="${images[2]}" alt=""></div>
        <div class="slide none"><img src="${images[3]}" alt=""></div>
        <div class="arrow left-arrow"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="arrow right-arrow"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
`;

// feat carusel in body html
document.body.innerHTML += carosello.outerHTML;

// CLICK SULL'ICONA
const slideElements = document.getElementsByClassName('slide');
let slideAttiva = 0;
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

rightArrow.addEventListener('click', function () {
    slideAttiva = (slideAttiva + 1) % slideElements.length;
    let slideCorrente = slideElements[slideAttiva];
    slideCorrente.classList.add('active');
    let slidePrecedente = slideElements[(slideAttiva + slideElements.length - 1) % slideElements.length];
    slidePrecedente.classList.remove('active');
});

leftArrow.addEventListener('click', function () {
    slideAttiva = (slideAttiva + slideElements.length - 1) % slideElements.length;
    let slideCorrente = slideElements[slideAttiva];
    slideCorrente.classList.add('active');
    let slideSuccessiva = slideElements[(slideAttiva + 1) % slideElements.length];
    slideSuccessiva.classList.remove('active');
})