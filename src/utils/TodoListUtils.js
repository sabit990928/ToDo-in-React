const TodoListUtils = {
  filterTodo: ({ todos, todoType }) => {
    switch (todoType) {
      case 'completed':
        // console.log(todos, todoType);
        return todos.filter(todo => todo.isCompleted);
      case 'active':
        // console.log(todos.isCompleted, todoType);
        return todos.filter(todo => !todo.isCompleted);
      default:
        // console.log(todos, todoType);
        return todos;
    }
  },
};

export default TodoListUtils;
