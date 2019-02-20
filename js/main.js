import toggleActive from './toggleActive.js';
import handleEditorInput from './editorInput.js';
import addParagraph from './handleAdd.js';
import Editor from './components/editor.js';
import EditableText from './components/EditableText.js';

customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);

// select edit and save buttons
// add event listener (click)
// editButtons.forEach(button => button.addEventListener('click', toggleActive));

// listen for input events from editor

document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput))

// when fired, update text (or style) of sibling .text element
document.getElementById('add-button').addEventListener('click', addParagraph);