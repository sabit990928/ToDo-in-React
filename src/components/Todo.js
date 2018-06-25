import React from 'react';
import styled from 'styled-components';
import { Checkbox, List } from 'antd';

const LineThrough = styled.span`
${({ isThrough }) => (isThrough ? 'text-decoration: line-through' : 'text-decoration: none')};
`;
const StyledList = styled(List)`
  width: 100%;
`;
const Todo = ({ todo: { id, isCompleted, title }, onClick }) => {
  // console.log('todoss');
  const handleItemClick = ({ target: { checked } }) =>
    onClick({ id, checked });
  return (
    <StyledList
      key={id}
      size="small"
      bordered
      itemLayout="horizontal"
    >
      <List.Item>
        <Checkbox name="isCompleted" checked={isCompleted} onChange={handleItemClick}>
          <LineThrough isThrough={isCompleted}>{title}</LineThrough>
        </Checkbox>
      </List.Item>
    </StyledList>
  );
};
export default Todo;
