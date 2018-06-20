import { TODO_INPUT_CHANGED, ADD_TODO } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TODO_INPUT_CHANGED:
      return { ...state, input: action.payload };
    case ADD_TODO:
      console.log(action);
      // return { ...state, response: action.payload };
      return [...state, { id: action.id, input: action.title, isCompleted: action.isCompleted }];
    default:
      return state;
  }
};
