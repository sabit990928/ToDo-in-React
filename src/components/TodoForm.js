import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { Input } from 'antd';

class TodoForm extends PureComponent {
  static propTypes = {
    onSubmitButtonClick: func.isRequired,
  };

  state = {
    value: '',
  };

  handleInputChange = ({ target: { value } }) => this.setState({ value });

  handleSubmitButtonClick = (e) => {
    e.preventDefault();
    if (!this.state.value) return;

    this.props.onSubmitButtonClick(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    // console.log('TodoForm render');
    return (
      <form onSubmit={this.handleSubmitButtonClick}>
        <div>Add a new task</div>
        <br />
        <Input
          size="large"
          name="task"
          placeholder="I want to..."
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button type="submit" className="button">Add</button>
      </form>
    );
  }
}

export default TodoForm;
