import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const arrayImages = galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
            </div>`;
}).join('');

gallery.insertAdjacentHTML('beforeend', arrayImages);
gallery.addEventListener('click', e => {
    e.preventDefault();

    const {target} = e;

    if (!target.classList.contains('gallery__image')) {
        return
    }

    const instance = basicLightbox.create(`<img src="${target.dataset.source}" width="800" height="600">`, {
        handler: null,
        onShow: function (instance) {
            this.handler = document.addEventListener('keydown',handler.bind(instance))
            document.addEventListener('keydown', this.handler);
        },
        onClose: function () {
            document.removeEventListener('keydown', this.handler);
        }
    });

    instance.show();
});

function handler(e) {
    if (e.key === "Escape") {
        this.close();
    }
}

