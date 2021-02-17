// Pause animations on the page through a class
document.body.classList.add('js-loading');

function showPage() {
  document.body.classList.remove('js-loading');
}

window.addEventListener('load', showPage);

// Listen for the last animation to finish to restart the 'whole thing'
// const container = document.querySelector('.container');

// container.addEventListener('animationend', function(e) {
//   if (e.target === container){
  
//   setTimeout(() => {
//     container.style.display = 'none';
//     void container.offsetWidth;
//     container.style.display = 'flex';

    
//   }, 5000);
// }
// });

