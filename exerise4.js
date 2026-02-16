const box = document.querySelector('.box');

box.addEventListener('click', (event) => {

  // BUG EXPLANATION:
  // Arrow functions do not have their own 'this'. 
  // Instead, they inherit 'this' from the surrounding lexical scope (likely the window object).
  // Because of that, 'this' does NOT refer to the clicked element here, so this.classList is undefined.

  
  // FIX:
  event.currentTarget.classList.add('active');

  
  // WHY THIS WORKS:
  // event.currentTarget always refers to the element that the event listener
  // is attached to (in this case, the .box element).
  // It gives us exactly what 'this' would have referred to in a regular function handler.
});
