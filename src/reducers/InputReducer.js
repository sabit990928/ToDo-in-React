import { TODO_INPUT_CHANGED } from '../actions/types';

const INITIAL_STATE = { input: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_INPUT_CHANGED:
      return { ...state, input: action.payload };
    default:
      return state;
  }
};
