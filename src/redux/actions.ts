export const addTodo = (data: unknown) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};

export const toggleTodoStatus = (todoId: number) => {
  return {
    type: 'todoList/toggleTodoStatus',
    payload: todoId,
  };
};

export const searchFilterChange = (text: string) => {
  return {
    type: 'filters/searchFilterChange',
    payload: text,
  };
};

export const statusFilterChange = (status: unknown) => {
  return {
    type: 'filters/statusFilterChange',
    payload: status,
  };
};

export const priorityFilterChange = (priorities: unknown) => {
  return {
    type: 'filters/prioritiesFilterChange',
    payload: priorities,
  };
};
