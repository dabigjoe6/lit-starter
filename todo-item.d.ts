import { LitElement } from 'lit';
import { TodoItemI } from './interface';
export declare class TodoItem extends LitElement {
    static styles: import("lit").CSSResultGroup;
    changeStatus: (arg0: string) => void;
    data: TodoItemI;
    hidden: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'todo-item': TodoItem;
    }
}
//# sourceMappingURL=todo-item.d.ts.map