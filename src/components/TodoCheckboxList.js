import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { func, arrayOf, string, bool, shape } from 'prop-types';

const LineThrough = styled.span`
  ${({ isThrough }) => (isThrough ? 'text-decoration: line-through' : 'text-decoration: none')};
`;

class TodoCheckboxList extends PureComponent {
  static propTypes = {
    todos: arrayOf(shape({
      id: string,
      title: string,
      isCompleted: bool,
    })),
    handleItemClick: func.isRequired,
  };

  static defaultProps = {
    todos: [],
  }

  renderCheckbox = (todo) => {
    const handleItemClick = ({ target: { checked } }) =>
      this.props.handleItemClick({ id: todo.id, checked });

    return (
      <div key={todo.id}>
        <input type="checkbox" name="isCompleted" checked={todo.isCompleted} onChange={handleItemClick} />
        <LineThrough isThrough={todo.isCompleted}>{todo.title}</LineThrough>
      </div>
    );
  }

  render() {
    const { todos } = this.props;
    return (
      todos.map(this.renderCheckbox)
    );
  }
}

export default TodoCheckboxList;
