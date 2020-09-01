import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import CurrentTrack from 'src/components/CurrentTruck';

import ListTrigger from 'src/components/ListTrigger';
import Track from 'src/components/Track';
import ITrack from 'src/interfaces/ITrack';
import * as actions from 'src/store/actions';

const currentTrackHeight = '75px';
const listTriggerHeight = '59px';

const TrackListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  left: 0;
  transition: all 300ms ease;
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

interface Properties {
  tracks: ITrack[];
  chooseTrack: Function;
  nextTrack: ITrack;
  currentTrack: ITrack;
}

function TrackListModal({ tracks, chooseTrack, nextTrack, currentTrack }: Properties): JSX.Element {
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
          <ListTrigger toggleList={() => toggleTracksList(true)} nextTrack={nextTrack} />
        ) : (
          <CurrentTrack toggleList={() => toggleTracksList(false)} track={currentTrack} />
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
  currentTrack: state.player.currentTrack,
});

const mapDispatchToProps = (dispatch: any) => ({
  chooseTrack: (track: ITrack, index: number) =>
    dispatch(actions.chooseTrack(track, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackListModal);
