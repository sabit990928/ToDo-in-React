import React, { PureComponent } from 'react';
import { func, arrayOf, string, bool, shape } from 'prop-types';

import { Todo } from './';

class TodoList extends PureComponent {
  static propTypes = {
    todos: arrayOf(shape({
      id: string,
      title: string,
      isCompleted: bool,
    })),
    onTodoClick: func.isRequired,
  };

  static defaultProps = {
    todos: [],
  }

  renderTodo = todo => (
    <div key={todo.id}>
      <Todo todo={todo} onClick={this.props.onTodoClick} />
    </div>
  )

  render() {
    const { todos } = this.props;
    return (
      <div>
        {todos.map(this.renderTodo)}
      </div>
    );
  }
}

export default TodoList;
