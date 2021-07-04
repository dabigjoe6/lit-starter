var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators';
import './add-todo';
import './todo-item';
let TodoElement = class TodoElement extends LitElement {
    constructor() {
        super(...arguments);
        this._showDone = true;
        this.todos = {
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
        };
        this._addTodo = (value) => {
            const date = (new Date).toString();
            const key = (value + '_' + date).trim();
            this.todos[key] = {
                id: key,
                done: false,
                name: value
            };
            this.requestUpdate();
        };
        this._toggleCompleted = () => {
            this._showDone = !this._showCompletedInput.checked;
        };
        this._changeStatus = (id) => {
            this.todos[id].done = !this.todos[id].done;
            this.requestUpdate();
        };
    }
    render() {
        const items = Object.keys(this.todos).map(key => (html `<todo-item 
              .changeStatus=${this._changeStatus}
              .data=${this.todos[key]}
              .hidden=${this.todos[key].done && !this._showDone}>
            </todo-item>`));
        return html `
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
    </div>`;
    }
};
__decorate([
    property({ type: Boolean })
], TodoElement.prototype, "_showDone", void 0);
__decorate([
    property({ type: Object })
], TodoElement.prototype, "todos", void 0);
__decorate([
    query('#showCompleted')
], TodoElement.prototype, "_showCompletedInput", void 0);
TodoElement = __decorate([
    customElement('todo-element')
], TodoElement);
export { TodoElement };
//# sourceMappingURL=todo-element.js.map