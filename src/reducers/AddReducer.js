import { ADD_TODO, TOGGLE_TODO } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, {
          id: action.id, title: action.todo, isCompleted: action.isCompleted,
        },
      ];
      /* eslint-disable  no-case-declarations */
    case TOGGLE_TODO:
      console.log(state, action);
      const newState = state.map(todo =>
        (todo.id === action.id ? { ...todo, isCompleted: action.isCompleted } : todo));
      return newState;
      /* eslint-enable  no-case-declarations */
    default:
      return state;
  }
};
