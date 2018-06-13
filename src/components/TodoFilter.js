import React from 'react';
import { func } from 'prop-types';

const TodoFilter = ({ onTypeChange }) => (
  <div>
    <button name="active" onClick={onTypeChange}>Active</button>
    <button name="completed" onClick={onTypeChange}>Completed</button>
    <button name="all" onClick={onTypeChange}>All</button>
  </div>
);

TodoFilter.propTypes = {
  onTypeChange: func.isRequired,
};

export default TodoFilter;
