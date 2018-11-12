import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BigContent = styled.div`
  font-size: 180px;
  font-family: sans-serif;
  color: #2d3436;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  text-shadow: 3px 4px rgba(100, 100, 100, 0.5);
  @media screen and (max-width: 720px) {
    font-size: 120px;
  }
`;

const Status = styled(BigContent)``;

const Emoji = styled(BigContent)`
  font-weight: 100;
  white-space: nowrap;
  @media screen and (max-width: 480px) {
    font-size: 80px;
  }
`;

const Message = styled.div`
  padding: 20px;
  color: #2d3436;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
`;

const NotFound = () => (
  <Container>
    <Status>404</Status>
    <Emoji>(ಥ﹏ಥ)</Emoji>
    <Message>
      Oops... We're sorry we couldn't find what you were looking for.
    </Message>
  </Container>
);

export default NotFound;
