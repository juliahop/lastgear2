// Pause animations on the page through a class
document.body.classList.add('js-loading');

function showPage() {
  document.body.classList.remove('js-loading');
}

window.addEventListener('load', showPage);