let images = [...document.querySelectorAll('.lazy')];

const interactSettings = {
  //root: document.querySelector('.gallery__content'),
  // rootMargin: '0px 0px 200px 0px'
}

function onIntersection(imageEntites) {
  imageEntites.forEach(image => {
    if (image.isIntersecting) {
      observer.unobserve(image.target)
      image.target.src = image.target.dataset.src
      image.target.onload = () => image.target.classList.add('no-blur')
    }
  })
}

let observer = new IntersectionObserver(onIntersection, interactSettings);

images.forEach(image => observer.observe(image));