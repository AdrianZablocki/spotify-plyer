import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';

import LoginContainer from 'src/containers/LoginContainer';
import useAccessToken from 'src/hooks/use-access-token';
import Routes from 'src/Routes';
import BackgroundImage from 'src/assets/bg_image.jpg';

const AppContainer = styled.main`
  position: relative;
  height: 100vh;
  max-width: 768px;
  margin: 0 auto;
  background: transparent;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${BackgroundImage}) no-repeat #000;
  background-size: cover;
  background-position: 50% 50%;
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
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, .1) 100%);
    z-index: -1;
  }
`;

function App():JSX.Element {
  const { accessToken, isAuthorized } = useAccessToken();

  return (
    <AppContainer>
      <Background />
      {!isAuthorized ? <LoginContainer /> : (
        <Router>
          <Routes accessToken={accessToken} />
        </Router>
      )}
    </AppContainer>
  );
}

export default App;
