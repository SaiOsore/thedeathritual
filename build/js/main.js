"use strict";

//preloader
var preloader = document.querySelector('.preloader');

var bodyFixed = function bodyFixed() {
  document.body.classList.add('body-fixed');
};

var isPreloaderLoaded = function isPreloaderLoaded() {
  document.body.classList.remove('body-fixed');
  preloader.classList.add('hidden');
};

var preloaderAnim = {
  targets: preloader,
  delay: 1500,
  opacity: {
    value: 0,
    duration: 300,
    easing: 'linear'
  },
  offset: '+=100',
  begin: function begin() {
    bodyFixed();
  },
  complete: function complete() {
    isPreloaderLoaded();
  }
};
var Logo = {
  targets: '.preloader svg path',
  opacity: '0',
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function delay(el, i) {
    return i * 250;
  },
  direction: 'alternate'
};
var tlLogo = anime.timeline({
  autoplay: false,
  duration: 500
});
tlLogo.add(preloaderAnim).add(Logo);
tlLogo.play();
var preloaderCounter = document.querySelector('.preloader__counter');
var counter = {
  nums: '0%'
};
anime({
  targets: counter,
  nums: '100%',
  round: 1,
  easing: 'linear',
  update: function update() {
    preloaderCounter.innerHTML = counter.nums;
  }
});
"use strict";

var canvas = document.querySelector('.home__canvas');

if (canvas) {
  var setup = function setup() {
    width = window.innerWidth, height = window.innerHeight - 5;
    lines.length = 0;
    var lineCount = height / 26;
    var pointCount = 14;
    var spacingH = width / pointCount;
    var spacingV = height / lineCount;

    for (var v = 0; v < lineCount; v++) {
      var line = {
        points: [],
        ran: 0.2 + Math.random() * 0.7
      };

      for (var h = 0; h < pointCount; h++) {
        line.points.push({
          nx: h * spacingH,
          ny: v * spacingV
        });
      }

      line.points.push({
        nx: width + spacingH,
        ny: v * spacingV
      });
      lines.push(line);
    }
  };

  var color = function color() {
    colorIndex = ++colorIndex % colors.length;
    canvas.style.backgroundColor = colors[colorIndex][0];
  };

  var update = function update() {
    step += 0.8;
    canvas.width = width;
    canvas.height = height;
    context.clearRect(0, 0, width, height);
    context.lineWidth = 2;
    context.strokeStyle = colors[colorIndex][1];
    context.fillStyle = colors[colorIndex][0];
    lines.forEach(function (line, v) {
      context.beginPath();
      line.points.forEach(function (point, h) {
        point.x = point.nx, point.y = point.ny + Math.sin((point.x * line.ran + (step + point.ny)) / 40) * (6 + point.ny / height * 34);
      });
      line.points.forEach(function (point, h) {
        var nextPoint = line.points[h + 1];

        if (h === 0) {
          context.moveTo(point.x, point.y);
        } else if (nextPoint) {
          var cpx = point.x + (nextPoint.x - point.x) / 2;
          var cpy = point.y + (nextPoint.y - point.y) / 2;
          context.quadraticCurveTo(point.x, point.y, cpx, cpy);
        }
      });
      context.stroke();
      context.lineTo(width, height);
      context.lineTo(0, height);
      context.closePath();
      context.fill();
    });
    requestAnimationFrame(update);
  };

  var context = canvas.getContext('2d');
  var lines = [];
  var colors = [['#000', '#fff']];
  var colorIndex = -1;
  var step = 0,
      width = 0,
      height = 0; // document.ontouchstart = color;
  // document.onmousedown = color;

  window.onresize = setup;
  setup();
  color();
  update();
}
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var images = _toConsumableArray(document.querySelectorAll('.lazy'));

var interactSettings = {//root: document.querySelector('.gallery__content'),
  // rootMargin: '0px 0px 200px 0px'
};

function onIntersection(imageEntites) {
  imageEntites.forEach(function (image) {
    if (image.isIntersecting) {
      observer.unobserve(image.target);
      image.target.src = image.target.dataset.src;

      image.target.onload = function () {
        return image.target.classList.add('no-blur');
      };
    }
  });
}

var observer = new IntersectionObserver(onIntersection, interactSettings);
images.forEach(function (image) {
  return observer.observe(image);
});
"use strict";
"use strict";

var playerBtn = document.querySelector('.mini-player__button'),
    playIcon = document.querySelector('.mini-player__play'),
    pauseIcon = document.querySelector('.mini-player__pause');
var playing = false;
var player = document.querySelector('.mini-player__audio');
player.preload = 'auto';
player.addEventListener('ended', function () {
  playerBtn.classList.toggle('mini-player__button--active');
  playing = false;
});
playerBtn.addEventListener('click', playPause);

function playPause() {
  if (playing) {
    player.pause();
    playerBtn.classList.toggle('mini-player__button--active');
  } else {
    player.play();
    playerBtn.classList.toggle('mini-player__button--active');
  }

  playing = !playing;
}
"use strict";

var wrapperMenu = document.querySelector('.header-mobile-btn');
var mobileMenu = document.querySelector('.header__mobile-menu');
wrapperMenu.addEventListener('click', function () {
  wrapperMenu.classList.toggle('header-mobile-btn--active');
  mobileMenu.classList.toggle('header__mobile-menu--active');
  document.body.classList.toggle('body-fixed');
});
"use strict";

(function () {
  var downloadBtn = document.querySelector('.downloadMusicJs'),
      downloadPopup = document.querySelector('.popup-download'),
      downloadCloseBtn = document.querySelector('.popup-download__close');
  downloadBtn.addEventListener('click', function () {
    downloadPopup.style.display = 'flex';
    document.addEventListener('mousedown', function (e) {
      if (e.target.closest('.popup-download') === null) {
        downloadPopup.style.display = 'none';
      }
    });
  });
  downloadCloseBtn.addEventListener('click', function () {
    downloadPopup.style.display = 'none';
  });
})();
"use strict";
"use strict";

function findVideos() {
  var videos = document.querySelectorAll('.video');

  for (var i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  var link = video.querySelector('.video__link'),
      media = video.querySelector('.video__media'),
      button = video.querySelector('.video__btn'),
      title = video.querySelector('.video__title'),
      id = parseMediaURL(media);

  var makeVideoVisible = function makeVideoVisible() {
    var iframe = createIframe(id);
    link.remove();
    button.remove();
    title.remove();
    video.appendChild(iframe);
    video.removeEventListener('click', makeVideoVisible, false);
  };

  video.addEventListener('click', makeVideoVisible);
  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i,
      url = media.src,
      match = url.match(regexp);
  return match[1];
}

function createIframe(id) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');
  return iframe;
}

function generateURL(id) {
  var query = '?rel=0&showinfo=0&autoplay=1';
  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();
//# sourceMappingURL=maps/main.js.map
