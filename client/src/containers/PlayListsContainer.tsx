import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from 'nuka-carousel';

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

  return (
    <div data-test="section-playlists">
      {isLoading && <div>spiner</div>}
      {hasError && <div>error message</div>}
      <button onClick={redirectToAccount} type="button">go to account</button>
      {response && (
        <Carousel cellAlign="center" cellSpacing={20}>
          {
            response.items.map((item: any) =>
              <div key={item.id} onClick={() => redirectToPlaylist(item.id)}>
                <img src={item.images[0].url} style={{ height: 250, width: 250, borderRadius: '50%', margin: '0 auto', display: 'block' }} />
              </div>)
          }
        </Carousel>
      )}
    </div>
  );
}

export default PlayListsContainer;
