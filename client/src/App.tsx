import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LoginContainer from 'src/containers/LoginContainer';
import useAccessToken from 'src/hooks/use-access-token';
import Routes from 'src/Routes';

function App():JSX.Element {
  const { accessToken, isAuthorized } = useAccessToken();

  return (
    <div className="App">
      {!isAuthorized ? <LoginContainer /> : (
        <Router>
          <Routes accessToken={accessToken} />
        </Router>
      )}
    </div>
  );
}

export default App;
