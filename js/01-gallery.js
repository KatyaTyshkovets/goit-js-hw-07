import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const galleryItemsContainer = document.querySelector('.gallery');

const cardsMarkup = createGalleryItemsMarkup(galleryItems);
galleryItemsContainer.insertAdjacentHTML('beforeend', cardsMarkup);


galleryItemsContainer.addEventListener('click', onclick);


function createGalleryItemsMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `
            
  })
    .join('');
};

function onclick(e) {
  e.preventDefault()


  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  
  const resultOnClick = e.target.dataset.source

  const instance = basicLightbox.create(
    `
    <img src="${resultOnClick}" width="800" height="600">
`
  )
  instance.show()

  
};
