import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Track from 'src/components/Track';
import usePlayList from 'src/hooks/use-playlist';

const TrackListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  position: absolute;
  left: 0;
  transition: all 300ms ease;
`;
const ListTrigger = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: #FFF;
`;
const NextTrack = styled.div`
  width: 100%;
`;
const Label = styled.div`
  color: #626262;
  font-size: 10px;
  padding-left: 20px;
  text-transform: uppercase;
`;
const CurrentTruck = styled.div`
  padding: 15px;
  background: rgba(0, 0, 0, .5);
`;
const TrackItemsWrapper = styled.div`
  height: 100%;
  background: #FFF;
`;

const close = {
  top: 'calc(100% - 69px)',
  overflow: 'hidden',
};
const open = {
  height: '100vh',
  overflow: 'scroll',
  top: 0,
};
const iconListStyle = {
  width: '29px',
  height: '29px',
  fill: '#0FD55A',
};
const chevronIconStyles = {
  width: '45px',
  height: '45px',
  fill: '#0FD55A',
};

function TrackListModal(): JSX.Element {
  const { state } = useLocation<{ id: string }>();
  const [isOpen, setOpen] = useState(false);
  const {
    isPlaylistLoading,
    hasErrorPlaylist,
    playlistRequest,
    playlistResponse,
  } = usePlayList({ id: state?.id });

  useEffect(() => {
    playlistRequest();
  }, [state]);

  const toggleTracksList = useCallback((value: boolean) => {
    setOpen(value);
  }, [setOpen]);

  return (
    <TrackListWrapper style={isOpen ? open : close} data-test="section-playListItem">
      {isPlaylistLoading && <div>spiner</div>}
      {hasErrorPlaylist && <div>error message</div>}
      {playlistResponse && !isPlaylistLoading && (
        <>
          {!isOpen ? (
            <ListTrigger onClick={() => toggleTracksList(true)}>
              <FormatListBulletedIcon style={iconListStyle} />
              <NextTrack>
                <Label>Next</Label>
                <div style={{ paddingLeft: '20px' }}>track duration etc</div>
              </NextTrack>
            </ListTrigger>
          ) : (
            <CurrentTruck>
              <ChevronLeftIcon style={chevronIconStyles} onClick={() => toggleTracksList(false)} />
            </CurrentTruck>
          )}
          {/* <ButtonPrimary click={() => toggleTracksList(false)} content="close" /> */}
          <TrackItemsWrapper>
            {
              playlistResponse?.tracks.items.map((item: any, index: number) => (
                <Track key={item.track.id} item={item} index={index} />
              ))
            }
          </TrackItemsWrapper>
        </>
      )}
    </TrackListWrapper>
  );
}

export default TrackListModal;
