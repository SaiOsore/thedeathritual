const path = location.pathname,
      links = document.querySelectorAll('.nav__link');

if(links) {
  links.forEach((link) => {
    const linkHref = link.dataset.path;
    if((path === linkHref) || (path === '/audio.html' && linkHref === '/albums.html')) {
      link.classList.add('line');
    }
  });
}