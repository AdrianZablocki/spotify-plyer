import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TrackListModal from 'src/components/TrackListModal';
import LoginContainer from 'src/containers/LoginContainer';
import PlayListsContainer from 'src/containers/PlayListsContainer';
import AccountContainer from 'src/containers/AccountContainer';
import HttpContext from 'src/contexts/HttpContext';
import createHttp from 'src/api/http';

function Routes({ accessToken }: { accessToken: string }): JSX.Element {
  const http = createHttp(accessToken);

  return (
    <HttpContext.Provider value={http}>
      <Switch>
        <Route path="/" exact component={LoginContainer} />
        <Route path="/account" component={AccountContainer} />
        <Route path="/lists">
          <PlayListsContainer />
          <Route path="/lists/:id" component={TrackListModal} />
        </Route>
      </Switch>
    </HttpContext.Provider>
  );
}

export default Routes;
