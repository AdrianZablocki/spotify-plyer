import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';

import LoginContainer from 'src/containers/LoginContainer';
import useAccessToken from 'src/hooks/use-access-token';
import Routes from 'src/Routes';
import BackgroundImage from 'src/assets/bg_image.jpg';
import globalStyles from 'src/Theme/global-styles';

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const AppContainer = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: transparent;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${BackgroundImage}) no-repeat #000 50% 50%;
  background-size: cover;
  z-index: -1;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 30%,
      rgba(0, 0, 0, 0.9) 40%,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 0.7) 60%,
      rgba(0, 0, 0, 0.6) 70%,
      rgba(0, 0, 0, 0.5) 80%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: -1;
  }
`;

function App():JSX.Element {
  const { accessToken, isAuthorized } = useAccessToken();

  return (
    <AppWrapper>
      <AppContainer>
        <Background />
        {!isAuthorized ? <LoginContainer /> : (
          <Router>
            <Routes accessToken={accessToken} />
          </Router>
        )}
      </AppContainer>
      <Global styles={globalStyles} />
    </AppWrapper>
  );
}

export default App;
