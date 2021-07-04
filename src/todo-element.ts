import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators';

import {TodosI} from './interface';

import './add-todo';
import './todo-item';



@customElement('todo-element')
export class TodoElement extends LitElement {


  @property({type: Boolean}) private _showDone = true;

  @property({ type: Object }) todos: TodosI = {
    '1': {
      id: '1',
      done: false,
      name: 'First todo'
    },
    '2': {
      id: '2',
      done: true,
      name: 'Second todo'
    }
  }

  // @query('#add-todo') private _todoInput!: HTMLInputElement;
  @query('#showCompleted') private _showCompletedInput!: HTMLInputElement;

  private _addTodo = (value: string) => {

    const date: string = (new Date).toString();
    const key = (value + '_' + date).trim();
    this.todos[key] = {
      id: key,
      done: false,
      name: value
    }

    this.requestUpdate();

  }

  private _toggleCompleted = () => {
    this._showDone = !this._showCompletedInput.checked;
  }

  private _changeStatus = (id: string): void => {
    this.todos[id].done = !this.todos[id].done;
    this.requestUpdate();
  }

  render() {

    const items =  Object.keys(this.todos).map(key => 
      (html`<todo-item 
              .changeStatus=${this._changeStatus}
              .data=${this.todos[key]}
              .hidden=${this.todos[key].done && !this._showDone}>
            </todo-item>`
      ))

    return html`
    <div>
      <h3>Todo App</h3>
      <ul>
       ${items}
      </ul>
      <add-todo .addTodo=${this._addTodo}></add-todo>
      <div>
        <input @change=${this._toggleCompleted} id="showCompleted" type="checkbox">
        <label>Hide completed tasks</label>
      </div>
    </div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-element': TodoElement;
  }
}