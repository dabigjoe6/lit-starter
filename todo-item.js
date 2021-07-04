var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators';
import { classMap } from 'lit-html/directives/class-map';
let TodoItem = class TodoItem extends LitElement {
    render() {
        return html `
    <li 
      @click=${() => {
            this.changeStatus(this.data.id);
            this.requestUpdate();
        }} 
      class=${classMap({ done: this.data.done, hidden: this.hidden })}>
      ${this.data.name}
    </li>
  `;
    }
};
TodoItem.styles = css `
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
  
  `;
__decorate([
    property()
], TodoItem.prototype, "changeStatus", void 0);
__decorate([
    property({ type: Object })
], TodoItem.prototype, "data", void 0);
__decorate([
    property({ type: Boolean })
], TodoItem.prototype, "hidden", void 0);
TodoItem = __decorate([
    customElement('todo-item')
], TodoItem);
export { TodoItem };
//# sourceMappingURL=todo-item.js.map