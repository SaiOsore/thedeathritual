//preloader
const preloader = document.querySelector('.preloader');

const bodyFixed = () => {
  document.body.classList.add('body-fixed');
};

const isPreloaderLoaded = () => {
  document.body.classList.remove('body-fixed');
  preloader.classList.add('hidden');
};

const preloaderAnim = {
  targets: preloader,
  delay: 1500,
  opacity: {
    value: 0,
    duration: 300,
    easing: 'linear',
  },
  offset: '+=100',
  begin: function() {
    bodyFixed();
  },
  complete: function () {
    isPreloaderLoaded();
  }
};

const Logo = {
  targets: '.preloader svg path',
  opacity: '0',
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
};

const tlLogo = anime.timeline({
  autoplay: false,
  duration: 500
});

tlLogo
.add(preloaderAnim)
.add(Logo)
tlLogo.play();


var preloaderCounter = document.querySelector('.preloader__counter');

var counter = {
  nums: '0%',
}

anime({
  targets: counter,
  nums: '100%',
  round: 1,
  easing: 'linear',
  update: function() {
    preloaderCounter.innerHTML = counter.nums;
  }
});