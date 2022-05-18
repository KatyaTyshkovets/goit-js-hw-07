import { galleryItems } from './gallery-items.js';


console.log(galleryItems);

const galleryItemsContainer = document.querySelector('.gallery');


function createGalleryItemsMarkup({ preview, original, description }){
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `
    }
    
function newGalleryItems(img) {
    const gallery = img.map(createGalleryItemsMarkup).join('');

    galleryItemsContainer.innerHTML = gallery;
}

newGalleryItems(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});