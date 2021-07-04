import { LitElement, html, css} from 'lit';
import { customElement, property} from 'lit/decorators';
import { classMap } from 'lit-html/directives/class-map';

import { TodoItemI } from './interface';

@customElement('todo-item')
export class TodoItem extends LitElement {


  static styles = css`
  p {
    color: red;
    font-size: 20px;
  }

  .done {
    text-decoration: line-through;
  }

  .hidden {
    display: none;
  }
  
  `

  @property() public changeStatus!: (arg0: string) => void;
  @property({type: Object}) public data!: TodoItemI;
  @property({type: Boolean}) public hidden!: boolean;

  render() {
    return html`
    <li 
      @click=${() => {
        this.changeStatus(this.data.id)
        this.requestUpdate()
      }} 
      class=${classMap({ done: this.data.done, hidden: this.hidden })}>
      ${this.data.name}
    </li>
  `
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'todo-item': TodoItem;
  }
}

