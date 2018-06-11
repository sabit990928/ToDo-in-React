import React, { PureComponent } from 'react';

import { Todo } from './';


class TodoList extends PureComponent {
  renderTodo = ({ title, isGoing, id }) => {
    const handleCompleteButtonClick = () => this.props.onDeleteButtonClick(id);

    return (
      <div key={id}>
        <Todo
          id={id}
          title={title}
          isCompleted={isGoing}
          onCompleteButtonClick={handleCompleteButtonClick}
        />
      </div>
    );
  }
  render() {
    const { todos, onDeleteButtonClick } = this.props;
    if (todos.length === 0) {
      return <p>No todo added yet</p>;
    }

    return (
      <ol>
        {
          todos.map(this.renderTodo)
        }
      </ol>
    );
  }
}

export default TodoList;
