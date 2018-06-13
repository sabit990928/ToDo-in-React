import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';

const LineThrough = styled.span`
${({ isThrough }) => (isThrough ? 'text-decoration: line-through' : 'text-decoration: none')};
`;

const Todo = ({ todo: { id, isCompleted, title }, onClick }) => {
  const handleItemClick = ({ target: { checked } }) =>
    onClick({ id, checked });

  return (
    <div key={id}>
      <Checkbox name="isCompleted" checked={isCompleted} onChange={handleItemClick}>
        <LineThrough isThrough={isCompleted}>{title}</LineThrough>
      </Checkbox>
    </div>
  );
};

export default Todo;
