import React from 'react';
import { func } from 'prop-types';
import { Button } from 'antd';

const TodoFilter = ({ onTypeChange }) => (
  <div>
    <Button type="primary" name="all" onClick={onTypeChange}>All</Button>
    <Button name="active" onClick={onTypeChange}>Active</Button>
    <Button name="completed" onClick={onTypeChange}>Completed</Button>
  </div>
);

TodoFilter.propTypes = {
  onTypeChange: func.isRequired,
};

export default TodoFilter;
