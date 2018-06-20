import uuidv1 from 'uuid';

import { TODO_INPUT_CHANGED, ADD_TODO } from './types';

const id = uuidv1();

export const todoInputChanged = text => ({
  type: TODO_INPUT_CHANGED,
  payload: text,
});

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});
