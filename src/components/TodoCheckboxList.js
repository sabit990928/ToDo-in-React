import React, { PureComponent } from 'react';
import styled from 'styled-components';

// const lineThrough = styled.span`
//   text-decoration: line-through;
// `;

const checkboxStyle = checked => ({
  textDecoration: checked ? 'line-through' : 'none',
});

class TodoCheckboxList extends PureComponent {
  renderCheckbox = (todo) => {
    const handleItemClick = ({ target: { checked } }) => this.props.handleItemClick({ id: todo.id, checked });

    return (
      <form>
        <input type="checkbox" name="isCompleted" checked={todo.isCompleted} onChange={handleItemClick} />

        {/* <lineThrough>{todo.title}</lineThrough> */}
        <span style={checkboxStyle(todo.isCompleted)}> {todo.title}</span>

      </form>
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
