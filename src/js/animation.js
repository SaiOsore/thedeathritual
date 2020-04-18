//preloader
const preloader = document.querySelector('.preloader');

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
  complete: function() {
    isPreloaderLoaded();
  }
};

const tlPreloader = anime.timeline({
  autoplay: false,
  duration: 500
});

tlPreloader
.add(preloaderAnim)
tlPreloader.play();

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