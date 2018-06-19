import { TODO_INPUT_CHANGED } from './types';

export const todoInputChanged = text => ({
  type: TODO_INPUT_CHANGED,
  payload: text,
});

export const doInputChanged = text => ({
  type: TODO_INPUT_CHANGED,
  payload: text,
});
