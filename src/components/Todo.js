import React from 'react';
import styled from 'styled-components';

const LineThrough = styled.span`
${({ isThrough }) => (isThrough ? 'text-decoration: line-through' : 'text-decoration: none')};
`;

const Todo = ({ todo: { id, isCompleted, title }, onClick }) => {
  const handleItemClick = ({ target: { checked } }) =>
    onClick({ id, checked });

  return (
    <div key={id}>

      <input type="checkbox" name="isCompleted" checked={isCompleted} onChange={handleItemClick} />
      <LineThrough isThrough={isCompleted}>{title}</LineThrough>
    </div>
  );
};

export default Todo;
