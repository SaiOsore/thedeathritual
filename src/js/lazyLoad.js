let images = [...document.querySelectorAll('.lazy')];

if('IntersectionObserver' in window) {
  const interactSettings = {
    root: document.querySelector('.gallery__content'),
    rootMargin: '0px 0px 200px 0px'
  }

  const onIntersection = (imageEntites) => {
    imageEntites.forEach(image => {
      if(image.isIntersecting) {
        observer.unobserve(image.target);
        image.target.src = image.target.dataset.src;
        image.target.onload = () => {
          image.target.classList.add('no-blur');
          image.target.classList.remove('blur');
        }
      }
    })
  };

  let observer = new IntersectionObserver(onIntersection, interactSettings);

  images.forEach(image => observer.observe(image));
} else {
  images.forEach(image => {
    image.target.classList.add('no-blur');
    image.target.classList.remove('blur');
  });
}