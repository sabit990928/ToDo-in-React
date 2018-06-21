import { ADD_TODO } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action);
      return [
        ...state, {
          id: action.id, title: action.todo, isCompleted: action.isCompleted,
        },
      ];

    default:
      return state;
  }
};
