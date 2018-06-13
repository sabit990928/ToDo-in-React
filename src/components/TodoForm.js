import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { Input, Form, Button } from 'antd';

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
    const FormItem = Form.Item;
    return (
      <Form layout="inline" onSubmit={this.handleSubmitButtonClick}>
        <br />
        <FormItem>
          <Input
            type="text"
            size="large"
            name="task"
            placeholder="I want to..."
            value={this.state.value}
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

export default TodoForm;
