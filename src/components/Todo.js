import React from 'react';

const Todo = ({
  title, isCompleted, onCompleteButtonClick,
}) => console.log('TodoRender: ', title) || (
  <li>
    {title}
    <button onClick={onCompleteButtonClick}>
      DELETE
    </button>
  </li>
);

export default Todo;
