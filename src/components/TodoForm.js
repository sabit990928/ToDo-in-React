import React, { PureComponent } from 'react';
import { Input, Form, Button } from 'antd';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import { todoInputChanged, todoInputClean } from '../actions';

class TodoForm extends PureComponent {
  static propTypes = {
    onSubmitButtonClick: func.isRequired,
  };

  handleInputChange = ({ target: { value } }) => {
    this.props.todoInputChanged(value);
  };

  handleSubmitButtonClick = (e) => {
    e.preventDefault();
    if (!this.props.input) {
      return;
    }

    this.props.onSubmitButtonClick(this.props.input);
    this.props.todoInputClean(this.props.input);
  }

  render() {
    const FormItem = Form.Item;
    return (
      <Form layout="inline" onSubmit={this.handleSubmitButtonClick}>
        <FormItem>
          <Input
            type="text"
            size="large"
            name="task"
            placeholder="I want to..."
            value={this.props.input}
            onChange={this.handleInputChange}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" size="large">Add</Button>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  input: state.todo.input,
});

export default connect(mapStateToProps, { todoInputChanged, todoInputClean })(TodoForm);
