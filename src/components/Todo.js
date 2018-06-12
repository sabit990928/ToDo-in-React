import React from 'react';


const Todo = ({
  title, isCompleted, onCompleteButtonClick, id,
}) => console.log('TodoRender: ', title) || (
  <li key={id}>
    {title}
    <button onClick={onCompleteButtonClick}>
      COMPLETED
    </button>
  </li>

);

export default Todo;
