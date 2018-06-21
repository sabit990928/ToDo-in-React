import uuidv1 from 'uuid';

import { TODO_INPUT_CHANGED, ADD_TODO, TODO_INPUT_CLEAN } from './types';

export const todoInputChanged = text => ({
  type: TODO_INPUT_CHANGED,
  payload: text,
});

export const todoInputClean = text => ({
  type: TODO_INPUT_CLEAN,
  payload: text,
});

export const addTodo = todo => ({
  type: ADD_TODO,
  id: uuidv1(),
  todo,
  isCompleted: false,
});
