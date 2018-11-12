import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px;
`;

const removeToken = () => {
  localStorage.removeItem('github');
};

const AppNavbar = ({ history }) => {
  const onLogout = () => {
    removeToken();
    history.replace('/');
  };
  return (
    <Container>
      <a href={'/'}>Sourcexplorer</a>
      <div>Hello!</div>
      <button onClick={onLogout}>Logout</button>
    </Container>
  );
};

export default withRouter(AppNavbar);
