const box = document.querySelector('.box');

// Use a regular function so `this` refers to the clicked element
box.addEventListener('click', function () {
  this.classList.add('active');
});
