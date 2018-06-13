import React, { PureComponent } from 'react';

class CompletedTodoList extends PureComponent {
    renderCompletedTodo = ({ id, title, isCompleted }) =>
      // console.log(id, title);
      (
        <div key={id}>
          <li key={id}>
            {title}
          </li>
        </div>
      )

    render() {
      const { completedTodos } = this.props;
      if (completedTodos.length === 0) {
        return <p />;
      }
      return (
        <ol>
          <h3>Completed Todos</h3>
          {completedTodos.map(this.renderCompletedTodo)}
        </ol>
      );
    }
}

export default CompletedTodoList;
