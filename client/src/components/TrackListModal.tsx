import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Track from 'src/components/Track';
import ITrack from 'src/interfaces/ITrack';
import * as actions from 'src/store/actions';

const currentTrackHeight = '80px';
const listTriggerHeight = '69px';

const TrackListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
  max-height: ${currentTrackHeight};
  padding: 15px;
  background: rgba(0, 0, 0, .5);
`;
const TrackItemsWrapper = styled.div`
  height: calc(100vh - ${currentTrackHeight});
  background: #FFF;
  overflow: scroll;
`;
const close = {
  top: `calc(100% - ${listTriggerHeight})`,
};
const open = {
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

interface Properties {
  tracks: ITrack[];
  chooseTrack: Function;
  nextTrack: ITrack;
}

function TrackListModal({ tracks, chooseTrack, nextTrack }: Properties): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  const toggleTracksList = useCallback((value: boolean) => {
    setOpen(value);
  }, [setOpen]);

  const onChooseTrack = useCallback((item, index) => {
    chooseTrack(item, index);
    setOpen(false);
  }, []);

  return (
    <TrackListWrapper style={isOpen ? open : close} data-test="section-playListItem">
      <>
        {!isOpen ? (
          <ListTrigger onClick={() => toggleTracksList(true)}>
            <FormatListBulletedIcon style={iconListStyle} />
            <NextTrack>
              <Label>Next</Label>
              <div style={{ paddingLeft: '20px' }}>{nextTrack?.name}</div>
            </NextTrack>
          </ListTrigger>
        ) : (
          <CurrentTruck onClick={() => toggleTracksList(false)}>
            <ChevronLeftIcon style={chevronIconStyles} />
          </CurrentTruck>
        )}
        <TrackItemsWrapper>
          {tracks.map((item: any, index: number) =>
            <Track key={item.id} click={() => onChooseTrack(item, index)} item={item} />)}
        </TrackItemsWrapper>
      </>
    </TrackListWrapper>
  );
}

const mapStateToProps = (state: any) => ({
  tracks: state.player.tracks,
  isLoading: state.player.isLoading,
  nextTrack: state.player.nextTrack,
});

const mapDispatchToProps = (dispatch: any) => ({
  chooseTrack: (track: ITrack, index: number) =>
    dispatch(actions.chooseTrack(track, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackListModal);
