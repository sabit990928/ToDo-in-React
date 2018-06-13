import React, { PureComponent } from 'react';

import { Todo } from './';


class TodoList extends PureComponent {
  renderTodo = ({ id, title, isCompleted }) => {
    const handleCompleteButtonClick = () => this.props.onDeleteButtonClick(id, title, isCompleted);

    return (
      <div key={id}>
        <Todo
          id={id}
          title={title}
          isCompleted={isCompleted}
          onCompleteButtonClick={handleCompleteButtonClick}
        />
      </div>
    );
  }
  render() {
    const { todos } = this.props;
    if (todos.length === 0) {
      return <p>No todo added yet</p>;
    }
    console.log(todos);
    return (
      <ol>
        <h3>All todos</h3>
        {
        todos.map(this.renderTodo)
        }
      </ol>
    );
  }
}

export default TodoList;