import { galleryItems } from './gallery-items.js';
// Change code below this line

let instance;
const gallery = document.querySelector('.gallery');
const arrayImages = galleryItems.map(({preview, original, description}) => {
    return `<li>
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`;
}).join('');

gallery.insertAdjacentHTML('beforeend', arrayImages);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
});