function findVideos() {
  let videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link'),
      media = video.querySelector('.video__media'),
      button = video.querySelector('.video__btn'),
      title = video.querySelector('.video__title'),
      id = parseMediaURL(media);

  const makeVideoVisible = () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    title.remove();
    video.appendChild(iframe);
    video.removeEventListener('click', makeVideoVisible, false);
  }

  video.addEventListener('click', makeVideoVisible);

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i,
      url = media.src,
      match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();