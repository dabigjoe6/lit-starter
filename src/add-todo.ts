import {LitElement, html} from 'lit';
import {customElement, property, query} from 'lit/decorators';

@customElement('add-todo')
export class AddTodo extends LitElement {

  @property({attribute: true}) public addTodo!: (arg0: string) => void;

  @query('#add-todo') private _todoInput!: HTMLInputElement;

  render() {
    return html`
      <div>
          <input type="text" id="add-todo" />
          <button @click=${() => {
            this.addTodo(this._todoInput.value)
            this._todoInput.value = '';
          }} type="submit">Add Todo</button>
        </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'add-todo': AddTodo;
  }
}