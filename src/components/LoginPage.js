import React, { Component } from 'react';
import styled from 'styled-components';
import { Layout, Form, Icon, Input, Button } from 'antd';

import '../App.css';

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
  };
  render() {
    return (
      <div className="App">
        <StyledLayout>
          <Header><StyledHeaderText>Authentication</StyledHeaderText></Header>

          <StyledContent>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {(<Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                />)}
              </FormItem>
              <FormItem>
                {(<Input
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

export default LoginPage;
