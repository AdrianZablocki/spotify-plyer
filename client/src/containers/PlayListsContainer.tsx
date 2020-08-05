import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import usePlayLists from 'src/hooks/use-playlists';

function PlayListsContainer(): JSX.Element {
  const history = useHistory();
  const { isLoading, hasError, sendRequest, response } = usePlayLists();

  const redirectToAccount = useCallback(() => {
    history.push('/account');
  }, [history]);

  const redirectToPlaylist = useCallback((id: string) => {
    history.push(`/playlist/${id}`, {
      id,
    });
  }, []);

  useEffect(() => {
    sendRequest();
  }, []);

  console.log('lists', response);
  return (
    <div data-test="section-playlists">
      {isLoading && <div>spiner</div>}
      {hasError && <div>error message</div>}
      {response && (
        response.items.map((item: any) =>
          <div key={item.id} onClick={() => redirectToPlaylist(item.id)}>{item.name}</div>)
      )}
      <button onClick={redirectToAccount} type="button">go to account</button>
    </div>
  );
}

export default PlayListsContainer;
