import styled from '@emotion/styled';
import React from 'react';

import ButtonPrimary from 'src/components/ButtonPrimary';

const LoginContainerWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 align-items: center;
 height: 100vh;
 padding-bottom: 70px;
 box-sizing: border-box;
`;
const Header = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  color: #0FD55A;
  margin-bottom: 10px;
  letter-spacing: .5px;
`;
const Subheader = styled.div`
  margin-bottom: 50px;
  font-size: 16px;
  color: #626262;
`;

function LoginContainer(): JSX.Element {
  return (
    <LoginContainerWrapper>
      <Header>Spotify player</Header>
      <Subheader>Spotify player</Subheader>
      <ButtonPrimary content="Login" href="https://mighty-sands-44998.herokuapp.com/" />
    </LoginContainerWrapper>
  );
}

export default LoginContainer;
