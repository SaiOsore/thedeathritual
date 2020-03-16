let audios = [...document.querySelectorAll('.audio')];

const activeClassToggle = (el) => {
  el.classList.toggle('active-color');
}

audios.forEach((audioBlock) => {
  console.log(audioBlock);
  let audioTitle = audioBlock.querySelector('.audio__title');
  let audio = audioBlock.querySelector('.audio__control');
  audio.addEventListener('play', () => {
    activeClassToggle(audioTitle);
  });
  audio.addEventListener('pause', () => {
    activeClassToggle(audioTitle);
  });
});