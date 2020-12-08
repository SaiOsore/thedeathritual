const downloadBtn = document.querySelector('.downloadMusicJs'),
      downloadPopup = document.querySelector('.popup-download'),
      downloadCloseBtn = document.querySelector('.popup-download__close');

const showDownloadPopup = () => {
  downloadPopup.style.display = 'flex';
  document.addEventListener('mousedown', (e) => {
    if(e.target.closest('.popup-download') === null) {
      downloadPopup.style.display = 'none';
    }
  });
}

downloadCloseBtn.addEventListener('click', () => {
  downloadPopup.style.display = 'none';
});