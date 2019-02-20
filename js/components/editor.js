export default class Editor extends HTMLElement {
    constructor() {
    super()
    this.addEventListener('input', this.handleEditorInput);
    }
    connectedCallback() {
        this.render();
    }
    handleEditorInput(event) {
        const textElement = event.currentTarget.parentNode.querySelector('.text-element');
        if (event.target.type === 'text' || 
            event.target.tagName === 'TEXTAREA') {
            const text = event.target.value;
            textElement.innerText = text;
        } else {
             // handle the styles
            const { value, name: styleName} = event.target;
            const unit = event.target.dataset.unit || '';
            textElement.style[styleName] = `${value}${unit}`;
            }
    }
    render() {
        this.innerHTML = `
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
                <input type="number" name="font-size" data-unit="px" value="32"/>
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
          </section>
        `
        }
}