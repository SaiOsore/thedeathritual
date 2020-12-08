const modal = document.querySelector('.modal'),
      previews = document.querySelectorAll('.gallery__img'),
      modalImg = document.querySelector('.modal__img'),
      modalDescr = document.querySelector('.modal__descr');

if(modal && previews) {
  previews.forEach((preview) => {
    preview.addEventListener('click', () => {
      modal.classList.add('modal--open');
      modalImg.src = preview.getAttribute('data-src');
      modalImg.alt = preview.getAttribute('alt');
    });
  });

  modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')) {
      modal.classList.remove('modal--open');
    }
  });
}