import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useUser from 'src/hooks/use-user';

function AccountContainer(): JSX.Element {
  const history = useHistory();
  const { isLoading, hasError, sendRequest, response } = useUser();

  useEffect(() => {
    sendRequest();
  }, []);

  const redirectToPlayLists = useCallback(() => {
    history.push('/lists');
  }, [history]);

  return (
    <div>
      {isLoading && <div>spiner</div>}
      {hasError && <div>error message</div>}
      {response && (
        <div>
          <div>User: {response.display_name}</div>
          <div>Email: {response.email}</div>
          <div>Type: {response.product}</div>
          <button onClick={redirectToPlayLists} type="button">go to play lists</button>
        </div>
      )}
    </div>
  );
}

export default AccountContainer;
