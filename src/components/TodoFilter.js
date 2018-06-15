import React from 'react';
import { func, any } from 'prop-types';
import { Button } from 'antd';

const TodoFilter = ({ onTypeChange, currentFilter }) => (
  <div>
    <Button type={currentFilter === 'all' || !currentFilter ? 'primary' : 'normal'} name="all" onClick={onTypeChange}>All</Button>
    <Button type={currentFilter === 'active' ? 'primary' : 'normal'} name="active" onClick={onTypeChange}>Active</Button>
    <Button type={currentFilter === 'completed' ? 'primary' : 'normal'} name="completed" onClick={onTypeChange}>Completed</Button>
  </div>
);
/* eslint-disable react/forbid-prop-types */
TodoFilter.propTypes = {
  onTypeChange: func.isRequired,
  currentFilter: any,
};
/* eslint-enable react/forbid-prop-types */

TodoFilter.defaultProps = {
  currentFilter: null,
};

export default TodoFilter;
