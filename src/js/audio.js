let audioBlock = [...document.querySelectorAll('.audio')];
let audio =  [...document.querySelectorAll('.audio__control')];

const activeClassToggle = (el) => {
  el.classList.toggle('active-color');
}

audioBlock.forEach((block) => {
  let audioTitle = block.querySelector('.audio__title');
  let audio = block.querySelector('.audio__control');
  audio.addEventListener('play', () => {
    activeClassToggle(audioTitle);
  });
  audio.addEventListener('pause', () => {
    activeClassToggle(audioTitle);
  });
});

document.addEventListener('play', (e) => {
  for(let i = 0; i < audio.length; i++) {
    if(audio[i] != e.target){
      audio[i].pause();
    }
  }
}, true);