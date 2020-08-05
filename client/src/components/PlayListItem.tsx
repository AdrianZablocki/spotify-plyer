import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import usePlayList from 'src/hooks/use-playlist';

function PlayListItem(): JSX.Element {
  const { state } = useLocation<{ id: string }>();
  console.log(state?.id);
  const {
    isPlaylistLoading,
    hasErrorPlaylist,
    playlistRequest,
    playlistResponse,
  } = usePlayList({ id: state?.id });

  useEffect(() => {
    playlistRequest();
  }, []);

  console.log(playlistResponse?.tracks.items);
  return (
    <div data-test="section-playListItem">
      elementy listy
      {
        playlistResponse?.tracks.items.map(item => (
          <audio controls>
            <source src={item.track.preview_url} />
          </audio>
        ))
      }
    </div>
  );
}

export default PlayListItem;
