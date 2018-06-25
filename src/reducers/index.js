import { combineReducers } from 'redux';
import InputReducer from './InputReducer';
import AddReducer from './AddReducer';
import TodoTypeReducer from './TodoTypeReducer';

export default combineReducers({
  todo: InputReducer,
  todos: AddReducer,
  typeTodo: TodoTypeReducer,
});
