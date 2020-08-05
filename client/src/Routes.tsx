import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PlayListsContainer from 'src/containers/PlayListsContainer';
import AccountContainer from 'src/containers/AccountContainer';
import HttpContext from 'src/contexts/HttpContext';
import createHttp from 'src/api/http';

function Routes({ accessToken }: { accessToken: string }): JSX.Element {
  const http = createHttp(accessToken);

  return (
    <HttpContext.Provider value={http}>
      <Switch>
        <Route path="/account" component={AccountContainer} />
        <Route path="/lists" component={PlayListsContainer} />
      </Switch>
    </HttpContext.Provider>
  );
}

export default Routes;
