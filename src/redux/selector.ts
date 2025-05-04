import { createSelector } from 'reselect';
import { RootState } from '@/types';

export const searchTextSelector = (state: RootState) => state.filters.search;
export const filterStatusSelector = (state: RootState) => state.filters.status;
export const filterPrioritiesSelector = (state: RootState) => state.filters.priorities;
export const todoListSelector = (state: RootState) => state.todoList;

export const todosRemainingSelector = createSelector(
  [todoListSelector, filterStatusSelector, searchTextSelector, filterPrioritiesSelector],
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      const matchesSearch = todo.name.toLowerCase().includes(searchText.toLowerCase());

      const matchesStatus =
        status === 'All'
          ? true
          : status === 'Completed'
            ? todo.completed
            : !todo.completed;

      const matchesPriority =
        priorities.length === 0 ? true : priorities.includes(todo.priority);

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }
);
