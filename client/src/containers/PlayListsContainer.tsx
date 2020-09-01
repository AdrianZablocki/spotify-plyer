import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Player from 'src/components/Player';

import PlayListCarousel from 'src/components/PlayListCarousel';
import usePlayLists from 'src/hooks/use-playlists';
import ITrack from 'src/interfaces/ITrack';

function PlayListsContainer({ currentTrack }: { currentTrack: ITrack}): JSX.Element {
  const { isLoading, hasError, sendRequest, response } = usePlayLists();

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <div data-test="section-playlists">
      {isLoading && <div>spinner</div>}
      {hasError && <div>error message</div>}
      {response && <PlayListCarousel playLists={response.items} />}
      <Player currentTrack={currentTrack} />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  currentTrack: state.player.currentTrack,
});

export default connect(mapStateToProps, null)(PlayListsContainer);
