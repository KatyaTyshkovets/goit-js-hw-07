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
  
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}">`,
    {
      closable: false,
      onShow: () => {
        window.addEventListener('keydown', onEskey);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEskey);
      },
    },
  );
  function onEskey(e) {
    if (e.code !== 'Escape') {
      return;
    }
    instance.close();
  }
  instance.show();

};
