import { TODO_TYPE } from '../actions/types';

const INITIAL_STATE = { type: 'all' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_TYPE:
      return { ...state, type: action.payload };
    default:
      return state;
  }
};
