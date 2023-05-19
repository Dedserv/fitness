const videoWrapper = document.querySelector('.about__video');
const button = videoWrapper.querySelector('.about__video-button');
const iframe = document.createElement('iframe');
iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
iframe.setAttribute('frameborder', '0');
iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
iframe.setAttribute('allowfullscreen', '');


button.addEventListener('click', () => {
  while (videoWrapper.firstChild) {
    videoWrapper.removeChild(videoWrapper.firstChild);
  }
  videoWrapper.appendChild(iframe);
  button.remove();
});
