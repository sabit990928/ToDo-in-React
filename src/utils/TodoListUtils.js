const TodoListUtils = {
  filterTodo: ({ todos, todoType }) => {
    switch (todoType) {
      case 'completed':
        return todos.filter(todo => todo.isCompleted);
      case 'active':
        return todos.filter(todo => !todo.isCompleted);
      default:
        return todos;
    }
  },
};

export default TodoListUtils;
