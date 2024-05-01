// @customElement('my-component')
class MyEditorComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `
      <style>:host { display: block; }</style>
      <div>Hello from MyComponent!</div>
    `;
  }
}

customElements.define('my-editor-component', MyEditorComponent);