import React, { PureComponent } from 'react';
import { func, arrayOf, string, bool, shape } from 'prop-types';
import styled from 'styled-components';

import { Todo } from './';

const ListWrapper = styled.div`
  width: 80%;
`;

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
    // console.log(todos, 'todoss');
    return (
      <ListWrapper>
        {todos.map(this.renderTodo)}
      </ListWrapper>
    );
  }
}

export default TodoList;
