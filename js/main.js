import toggleActive from './toggleActive.js';

// select edit buttons
const editButtons = document.querySelectorAll('.edit-button');
// add event listener (click)
editButtons.forEach(button => button.addEventListener('click', toggleActive));