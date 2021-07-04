import { LitElement } from 'lit';
import { TodosI } from './interface';
import './add-todo';
import './todo-item';
export declare class TodoElement extends LitElement {
    private _showDone;
    todos: TodosI;
    private _showCompletedInput;
    private _addTodo;
    private _toggleCompleted;
    private _changeStatus;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'todo-element': TodoElement;
    }
}
//# sourceMappingURL=todo-element.d.ts.map