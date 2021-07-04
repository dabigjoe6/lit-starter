var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators';
let AddTodo = class AddTodo extends LitElement {
    render() {
        return html `
      <div>
          <input type="text" id="add-todo" />
          <button @click=${() => {
            this.addTodo(this._todoInput.value);
            this._todoInput.value = '';
        }} type="submit">Add Todo</button>
        </div>
    `;
    }
};
__decorate([
    property({ attribute: true })
], AddTodo.prototype, "addTodo", void 0);
__decorate([
    query('#add-todo')
], AddTodo.prototype, "_todoInput", void 0);
AddTodo = __decorate([
    customElement('add-todo')
], AddTodo);
export { AddTodo };
//# sourceMappingURL=add-todo.js.map