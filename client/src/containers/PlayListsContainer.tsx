import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Player from 'src/components/Player';

import PlayListCarousel from 'src/components/PlayListCarousel';
import usePlayLists from 'src/hooks/use-playlists';

const PlayListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function PlayListsContainer(): JSX.Element {
  const { isLoading, hasError, sendRequest, response } = usePlayLists();
  const { state } = useLocation<{ id: string }>();

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <PlayListWrapper data-test="section-playlists">
      {isLoading && <div>spinner</div>}
      {hasError && <div>error message</div>}
      {response && <PlayListCarousel playLists={response.items} />}
      {state?.id && <Player />}
    </PlayListWrapper>
  );
}

export default PlayListsContainer;
