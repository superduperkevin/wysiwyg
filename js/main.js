import toggleActive from './toggleActive.js';
import handleEditorInput from './editorInput.js';

// select edit and save buttons
const editButtons = document.querySelectorAll('.edit-button, .save-button');
// add event listener (click)
editButtons.forEach(button => button.addEventListener('click', toggleActive));

// listen for input events from editor

// when fired, update text (or style) of sibling .text element

document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput))