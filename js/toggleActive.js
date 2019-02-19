
/**
 * Toggles active class on editable-text
 * @param {Event} event 
 */

export default function toggleActive (event) {     // function that add a class to editable-text
    // get the parent element
    const  editableText = event.target.parentElement;
    // toggle the class active (on some element)
    editableText.classList.toggle('active');

    
}