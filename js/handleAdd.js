import toggleActive from "./toggleActive.js";
import handleEditorInput from "./editorInput.js";

// function adds a new pargraph when new paragraph button is clicked

export default function addParagraph() {
    // create element  (section w/ the class of 'editable-text')
    const newEditableText = document.createElement('section');
    newEditableText.className = 'editable-text';
    // set its innerHTML
    newEditableText.innerHTML = `
    <button type="button" class="edit-button">Edit</button>
        <button type="button" class="save-button">Save</button>

        <p class="text-element">Go ahead, edit me however you want!</p>

        <div class="editor">
          <!-- prettier-ignore -->
          <textarea cols="40" rows="5">Go ahead, edit me however you want!</textarea>

          <section class="styles">
            <div class="form-group">
              <label>
                Font color:
                <input type="color" name="color" />
              </label>
            </div>

            <div class="form-group">
              <label>
                Font size:
                <input type="number" name="font-size" data-unit="px" value="32" />
                px
              </label>
            </div>

            <div class="form-group">
              <label>
                Font family:
                <select name="font-family">
                  <option value="sans-serif">sans-serif</option>
                  <option value="serif">serif</option>
                </select>
              </label>
            </div>
    `
    //add event listeners
    newEditableText.querySelectorAll('.edit-button, .save-button')
    .forEach(button => button.addEventListener('click', toggleActive));
    // 
    newEditableText.querySelector('.editor').addEventListener('input', handleEditorInput)

    // append that to main (before our button)
    document.querySelector('main').insertBefore (newEditableText, event.target);
}