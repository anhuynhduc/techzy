import { combineReducers } from 'redux';

import filtersReducer from '@/redux/slices/FilterSlice';
import todoListReducer from '@/redux/slices/TodosSlice';

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;