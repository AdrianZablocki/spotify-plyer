import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonPrimary from 'src/components/ButtonPrimary';

import PlayListCarousel from 'src/components/PlayListCarousel';
import usePlayLists from 'src/hooks/use-playlists';

function PlayListsContainer(): JSX.Element {
  const history = useHistory();
  const { isLoading, hasError, sendRequest, response } = usePlayLists();

  const redirectToAccount = useCallback(() => {
    history.push('/account');
  }, [history]);

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div data-test="section-playlists">
      {isLoading && <div>spiner</div>}
      {hasError && <div>error message</div>}
      <ButtonPrimary click={redirectToAccount} content="go to account" />
      {response && <PlayListCarousel playLists={response.items} />}
    </div>
  );
}

export default PlayListsContainer;
