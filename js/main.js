// select edit buttons
const editButtons = document.querySelectorAll('.edit-button');
console.log(editButtons);
// add event listener (click)
editButtons.forEach(button => button.addEventListener('click', toggleActive));

// function that add a class to editable-text
function toggleActive (event) {
    // get the parent element
    const  editableText = event.target.parentElement;
    // toggle the class active (on some element)
    editableText.classList.toggle('active');
}