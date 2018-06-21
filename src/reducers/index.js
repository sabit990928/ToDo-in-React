import { combineReducers } from 'redux';
import InputReducer from './InputReducer';
import AddReducer from './AddReducer';

export default combineReducers({
  todo: InputReducer,
  todos: AddReducer,
});
