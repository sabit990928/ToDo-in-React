import { TODO_INPUT_CHANGED, TODO_INPUT_CLEAN } from '../actions/types';

const INITIAL_STATE = { input: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_INPUT_CHANGED:
      return { ...state, input: action.payload };
    case TODO_INPUT_CLEAN:
      return { ...state, input: '' };
    default:
      return state;
  }
};
