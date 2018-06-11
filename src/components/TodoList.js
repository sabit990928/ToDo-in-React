import React, { PureComponent } from 'react';

import { Todo } from './';


class TodoList extends PureComponent {
  renderTodo = (task, index) => {
    const handleCompleteButtonClick = () => this.props.onDeleteButtonClick(index);

    return (
      <div key={index}>
        <Todo
          title={task}
          isCompleted={false}
          onCompleteButtonClick={handleCompleteButtonClick}
        />
      </div>
    );
  }
  render() {
    console.log('TodoList render');
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
