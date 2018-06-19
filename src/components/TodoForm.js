import { connect } from 'react-redux';
import { func } from 'prop-types';
import { Input, Form, Button } from 'antd';
import React, { PureComponent } from 'react';

import { todoInputChanged } from '../actions';

class TodoForm extends PureComponent {
  static propTypes = {
    onSubmitButtonClick: func.isRequired,
  };

  state = {
    value: '',
  };

  handleInputChange = ({ target: { value } }) => {
    console.log(value);
    this.props.todoInputChanged(value);
  };

  handleSubmitButtonClick = (e) => {
    e.preventDefault();
    if (!this.state.value) return;

    this.props.onSubmitButtonClick(this.state.value);
    this.setState({ value: '' });
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

export default connect(mapStateToProps, { todoInputChanged })(TodoForm);
