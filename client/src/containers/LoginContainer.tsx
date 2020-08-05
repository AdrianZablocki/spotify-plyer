import React from 'react';

function LoginContainer(): JSX.Element {
  return (
    <a data-test="anchor-login" href="http://localhost:8888"><button type="button">Login with spotify</button></a>
  );
}

export default LoginContainer;
