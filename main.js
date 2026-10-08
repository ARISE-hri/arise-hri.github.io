'use strict';
const links = window.ARISE_LINKS || {};
document.querySelectorAll('[data-resource]').forEach(button => {
  const kind = button.dataset.resource;
  const url = links[kind];
  if (url && /^https:\/\//i.test(url)) {
    const anchor = document.createElement('a');
    anchor.className = 'resource';
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.innerHTML = button.innerHTML;
    anchor.querySelector('.sr-only')?.remove();
    button.replaceWith(anchor);
  }
});

// Keep each interaction audible when switching between the videos.
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => {
      if (other !== video) other.pause();
    });
  });
});
