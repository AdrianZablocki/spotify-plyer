import styled from '@emotion/styled';
import React from 'react';

import ButtonPrimary from 'src/components/ButtonPrimary';

const LoginContainerWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 height: 100vh;
 padding-bottom: 170px;
 box-sizing: border-box;
`;

const Header = styled.h1`
  color: #FFF;
  margin: 0 0 100px;
  text-align: center;
  font-weight: 400;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

function LoginContainer(): JSX.Element {
  return (
    <LoginContainerWrapper>
      <Header>Spotify list player</Header>
      <ButtonPrimary content="Login with Spotify" href="http://localhost:8888" />
    </LoginContainerWrapper>
  );
}

export default LoginContainer;
