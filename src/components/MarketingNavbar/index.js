import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px;
`;

const LOGIN_URL =
  process.env.REACT_APP_OAUTH_SERVER_URL +
  process.env.REACT_APP_OAUTH_LOGIN_PATH;

const MarketingNavbar = () => (
  <Container>
    <a href={'/'}>Sourcexplorer</a>
    <a href={LOGIN_URL}>Login</a>
  </Container>
);

export default MarketingNavbar;
