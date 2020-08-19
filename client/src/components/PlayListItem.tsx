import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import usePlayList from 'src/hooks/use-playlist';

const TrackItemWrapper = styled.div`
  padding: 5px;
`;
const TrackItem = styled.div`
  color: #FFF;
`;
const ListIndex = styled.span`
  font-size: 12px;
  color: #9A9A9A;
`;

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
        playlistResponse?.tracks.items.map((item: any, index: number) => (
          <TrackItem key={item.track.id}>
            <ListIndex>{index + 1}.</ListIndex>
            Sample of {item.track.track_number} track {item.track.duration_ms}
          </TrackItem>
        ))
      }
    </div>
  );
}

export default PlayListItem;
