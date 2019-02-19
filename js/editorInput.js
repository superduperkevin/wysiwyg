export default function handleEditorInput(event) {
    if (event.target.type === 'text' || 
    event.target.tagName === 'TEXTAREA') {

    const textElement = event.currentTarget.parentNode.querySelector('.text-element');
    const text = event.target.value;
    textElement.innerText = text;
    }
}