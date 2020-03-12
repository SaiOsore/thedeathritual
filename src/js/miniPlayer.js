const playerBtn = document.querySelector('.mini-player__button'),
      playIcon = document.querySelector('.mini-player__play'),
      pauseIcon = document.querySelector('.mini-player__pause');
let playing = false;

var player = document.querySelector('.mini-player__audio');
player.preload = 'auto';
player.addEventListener('ended', () => {
  playerBtn.classList.toggle('mini-player__button--active');
  playing = false;
});

playerBtn.addEventListener('click', playPause);

function playPause() {
  if(playing) {
    player.pause();
    playerBtn.classList.toggle('mini-player__button--active');
  } else {
    player.play();
    playerBtn.classList.toggle('mini-player__button--active');
  }
  playing = !playing;
}