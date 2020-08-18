import styled from '@emotion/styled';
import React from 'react';

import ButtonPrimary from 'src/components/ButtonPrimary';

const LoginContainerWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
`;

const Header = styled.h1`
  color: #FFF;
  margin: 50px 0 0;
  text-align: center;
  font-weight: 400;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

function LoginContainer(): JSX.Element {
  return (
    <>
      <Header>Spotify list player</Header>
      <LoginContainerWrapper>
        <ButtonPrimary content="Login with Spotify" href="http://localhost:8888" />
      </LoginContainerWrapper>
    </>
  );
}

export default LoginContainer;
