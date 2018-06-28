import { combineReducers } from 'redux';
import InputReducer from './InputReducer';
import AddReducer from './AddReducer';
import TodoTypeReducer from './TodoTypeReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  todo: InputReducer,
  todos: AddReducer,
  typeTodo: TodoTypeReducer,
  auth: AuthReducer,
});
