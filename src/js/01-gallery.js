// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallerySkelet = document.querySelector('ul');

function galleryCreator(galleryItems) {
    return galleryItems.map(({ preview, description, original }) => {
        return `
        <li class="gallery__item gallery__link">
          <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}" 
            height="100%"
            data-source="${original}"
            onclick="openModal(event)" 
            title="${description}"
            />
            
          </a>
        </li>
        `;
    }).join('');
}

const cardsGallery = galleryCreator(galleryItems);
gallerySkelet.innerHTML = cardsGallery;

function openModal(event) {
    event.preventDefault();
    const source = event.target.dataset.source;
    const fenster = basicLightbox.create(`
        <img width="1400" height="900" src="${source}">
    `) 
 fenster.show();
}

const galleryBox = new SimpleLightbox('.gallery__link', {
    captionData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
