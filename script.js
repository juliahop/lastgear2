// Pause animations on the page through a class
document.body.classList.add('js-loading');

function showPage() {
  document.body.classList.remove('js-loading');
}

window.addEventListener('load', showPage);

// Listen for the (almost) last animation to finish 
// const container = document.querySelector('.container');

// const animContainer = document.querySelector('.group-container');

// animContainer.addEventListener('animationend', function() {
  
//   setTimeout(() => {
//     container.style.display = 'none';
//     void container.offsetWidth;
//     container.style.display = 'flex';

    
//   }, 6000)
// });

