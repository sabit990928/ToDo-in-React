import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';

import { loginUser } from '../actions';

const FormItem = Form.Item;

const { Header, Content, Footer } = Layout;
const HEADER_HEIGHT = 50;
const FOOTER_HEIGHT = 100;
const StyledLayout = styled(Layout)`
  margin: 0 20%;
`;

const StyledContent = styled(Content)`
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeaderText = styled.h1`
  text-align: center;
  color: white;
  height: ${HEADER_HEIGHT}px;
`;

const StyledFooter = styled(Footer)`
  height: ${FOOTER_HEIGHT}px;
`;

class LoginPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.loginUser({ email: values.email, password: values.password });
      }
      console.log(this.props.isLoginSuccess);
      // { this.props.isLoginSuccess ? <Route path="/" exact component={HomePage} /> : console.log(err); }
    });
  };

  renderError() {
    if (this.props.error) {
      return (
        <div>
          {this.props.error}
        </div>
      );
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <StyledLayout>
          <Header><StyledHeaderText>Authentication</StyledHeaderText></Header>

          <StyledContent>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(<Input
                  // onPressEnter={this.handleEmailChange}
            prefix={
              <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
            placeholder="Username"
          />)}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(<Input
            prefix={
              <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
            type="password"
            placeholder="Password"
          />)}
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"

                >
                Login
                </Button>
              Or <a href="/register">register now!</a>
              </FormItem>
            </Form>
          </StyledContent>

          <StyledFooter><hr />Contact</StyledFooter>

        </StyledLayout>
      </div>
    );
  }
}

LoginPage.propTypes = {
  form: PropTypes.shape({
    validateFields: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.auth.error,
  isLoginSuccess: state.auth.isLoginSuccess,
});

const WrappedLoginForm = Form.create()(LoginPage);

export default connect(mapStateToProps, { loginUser })(WrappedLoginForm);
