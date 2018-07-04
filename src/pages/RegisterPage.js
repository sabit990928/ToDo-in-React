import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button } from 'antd';
import { signUpUser } from '../actions';

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

class RegisterPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        this.props.signUpUser({
          email: values.email, password: values.password, passwordAgain: values.passwordRepeat,
        });
      }
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
                {getFieldDecorator('passwordRepeat', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(<Input
            prefix={
              <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
            type="password"
            placeholder="Repeat Password"
          />)}
              </FormItem>
              <FormItem>
                {/* <Link to="/"> */}
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                Create user
                  </Button>
                {/* </Link> */}
              </FormItem>
            </Form>
          </StyledContent>

          <StyledFooter><hr />Contact</StyledFooter>

        </StyledLayout>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  form: PropTypes.shape({
    validateFields: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.auth.error,
});

const WrappedLoginForm = Form.create()(RegisterPage);

export default connect(mapStateToProps, { signUpUser })(WrappedLoginForm);
