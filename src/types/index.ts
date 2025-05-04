
export type Priority = 'High' | 'Medium' | 'Low';

export interface Todo {
  id: number;
  name: string;
  completed: boolean;
  priority: Priority;
}

export interface AddTodoAction {
  type: 'todoList/addTodo';
  payload: Todo;
}

export interface ToggleTodoStatusAction {
  type: 'todoList/toggleTodoStatus';
  payload: number;
}

export type TodoAction = AddTodoAction | ToggleTodoStatusAction;

export type FilterStatus = 'All' | 'Completed' | 'Todo';

export interface FiltersState {
  search: string;
  status: FilterStatus;
  priorities: Priority[];
}

export interface SearchFilterChangeAction {
  type: 'filters/searchFilterChange';
  payload: string;
}

export interface StatusFilterChangeAction {
  type: 'filters/statusFilterChange';
  payload: FilterStatus;
}

export interface PrioritiesFilterChangeAction {
  type: 'filters/prioritiesFilterChange';
  payload: Priority[];
}

export type FiltersAction =
  | SearchFilterChangeAction
  | StatusFilterChangeAction
  | PrioritiesFilterChangeAction;


export interface TodoProps {
  id: number;
  name: string;
  completed: boolean;
  priority: Priority;
}

export const PriorityColorMapping: Record<Priority, string> = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export interface RootState {
  todoList: Todo[];
  filters: FiltersState;
}