import { refs } from './src/js/refs.js';
import { galleryItems } from './src/js/app.js';

const { lightBox, lightBoxImage, lightBoxBtn, gallery } = refs;

let currentImg;

function addItems(arr) {
  const arrItems = [];
  let index = 0;
  arr.map(item => {
    index = index + 1;
    const { preview, original, description } = item;
    const galleryItem = document.createElement('li');
    const galleryItemLink = document.createElement('a');
    const galleryItemImg = document.createElement('img');
    galleryItem.classList.add('gallery__item');
    galleryItemLink.classList.add('gallery__link');
    galleryItemImg.classList.add('gallery__image');
    galleryItemLink.setAttribute('href', original);
    galleryItemImg.setAttribute('src', preview);
    galleryItemImg.setAttribute('data-source', original);
    galleryItemImg.setAttribute('alt', description);
    galleryItemImg.setAttribute('id', index);
    galleryItemLink.append(galleryItemImg);
    galleryItem.append(galleryItemLink);
    arrItems.push(galleryItem);
  });

  gallery.append(...arrItems);
}
addItems(galleryItems);

gallery.addEventListener('click', e => {
  currentImg = e.target;
  if (currentImg.nodeName === 'IMG') {
    e.preventDefault();
    const url = currentImg.dataset.source;
    lightBox.classList.add('is-open');

    lightBoxImage.setAttribute('src', url);
  }
});

function closeModal() {
  lightBox.classList.remove('is-open');
  lightBoxImage.setAttribute('src', '');
}

lightBox.addEventListener('click', e => {
  if (
    e.target.classList.contains('lightbox__overlay') ||
    e.target.classList.contains('lightbox__button')
  ) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});

// const allImg = document.querySelectorAll('ul img');

// const images = Array(allImg);

// function getUrl(arr) {
//   for (let i = 1; i <= images.length; i++) {

//   }
// }

// getUrl(images);

document.addEventListener('keydown', e => {
  // const allImg = document.querySelectorAll('ul img');
  // console.log(allImg);
  // const images = Array(allImg);
  // console.log(images);
  let currentIdx = Number(currentImg.attributes.id.nodeValue);
  currentIdx = currentIdx + 1;
  let nextImg;
  let nextUrl;
  console.log(currentIdx);
  if (e.code === 'ArrowRight') {
    nextImg = document.getElementById(currentIdx);
    nextUrl = nextImg.dataset.source;
    lightBoxImage.setAttribute('src', nextUrl);
  }
});
// не забыть снять слушателей
