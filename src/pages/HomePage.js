import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Col, Row } from 'antd';
import { withRouter, Link } from 'react-router-dom';

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

const RightCol = styled(Col)`
  text-align: right;
`;

const StyledHeaderText = styled.h1`
  text-align: center;
  color: white;
  height: ${HEADER_HEIGHT}px;
`;

const StyledFooter = styled(Footer)`
  height: ${FOOTER_HEIGHT}px;
`;

const HomePage = ({ auth }) => (
  <div>
    <StyledLayout>
      <Header>
        <StyledHeaderText>
          Home Page
        </StyledHeaderText>

        <RightCol>
          {auth ? (
            <div>
              {auth}
                  Logout
            </div>)
                : (
                  <div><Link to="/login">Login</Link></div>
                  )
              }
        </RightCol>

      </Header>

      <StyledContent>
            Content
      </StyledContent>

      <StyledFooter><hr />Contact</StyledFooter>

    </StyledLayout>
  </div>
);

HomePage.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default HomePage;
