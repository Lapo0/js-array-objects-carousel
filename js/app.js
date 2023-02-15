// HTML RIPRODOTTO IN JS

// ADD SECTION
const carosello = document.createElement('section');

// ADD CONTAINER
const container = document.createElement('div');
container.classList.add('container-sm', 'py-5');
// feat container in section
carosello.appendChild(container);

// ARRAY IMMAGINI
const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfh73DIdzzaYX8LxezWX-G4G2uFA4-78bAA&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CSuKAbbfXdwNJqZlrFJ6t5opoOPNYEiZ_g&usqp=CAU',
  'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  'https://picsum.photos/536/354'
];

// CICLO CARUSEL
for (let i = 0; i < images.length; i++) {

    // Div Slide
  const slide = document.createElement('div');
  slide.classList.add('slide', 'none');
  if (i === 0) {
    slide.classList.add('active');
  }
  // feat slide in container
  container.appendChild(slide);

  // Img Slide
  const img = document.createElement('img');
  img.src = images[i];
  img.alt = '';
  // feat img in slide
  slide.appendChild(img);
}

// ARROW
// LEFT ARROW
const leftArrow = document.createElement('div');
leftArrow.classList.add('arrow', 'left-arrow');
const leftArrowIcon = document.createElement('i');
leftArrowIcon.classList.add('fa-solid', 'fa-chevron-left');
// feat 'leftArrow' div in container & feat icon in 'leftArrow' div
leftArrow.appendChild(leftArrowIcon);
container.appendChild(leftArrow);

// RIGHT ARROW
const rightArrow = document.createElement('div');
rightArrow.classList.add('arrow', 'right-arrow');
const rightArrowIcon = document.createElement('i');
rightArrowIcon.classList.add('fa-solid', 'fa-chevron-right');
// feat 'rightArrow' div in container & feat icon in 'rightArrow' div
rightArrow.appendChild(rightArrowIcon);
container.appendChild(rightArrow);

// feat carusel in body html
document.body.appendChild(carosello);


// CLICK SULL'ICONA

const slideElements = document.getElementsByClassName('slide')
console.log(slideElements)

let slideAttiva = 0

// let leftArrow = document.querySelector('.left-arrow')
// let rightArrow = document.querySelector('.right-arrow')

console.log(leftArrow, rightArrow)

rightArrow.addEventListener('click', function () {

    slideAttiva = (slideAttiva + 1) % slideElements.length;

    let slideCorrente = slideElements[slideAttiva];
    slideCorrente.classList.add('active');

    let slidePrecedente = slideElements[(slideAttiva + slideElements.length - 1) % slideElements.length];
    slidePrecedente.classList.remove('active');
})

leftArrow.addEventListener('click', function () {

    slideAttiva = (slideAttiva + slideElements.length - 1) % slideElements.length;

    let slideCorrente = slideElements[slideAttiva];
    slideCorrente.classList.add('active');

    let slideSuccessiva = slideElements[(slideAttiva + 1) % slideElements.length];
    slideSuccessiva.classList.remove('active');
})