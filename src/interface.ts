export interface TodoItemI {
  id: string;
  done: boolean;
  name: string;
}

export interface TodosI {
  [key: string]: TodoItemI;
}