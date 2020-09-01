import React from 'react';
import { connect } from 'react-redux';

import ITrack from 'src/interfaces/ITrack';
import * as actions from 'src/store/actions';

interface Properties {
  currentTrack: ITrack;
  playNext: Function;
}

function Player({ currentTrack, playNext }: Properties): JSX.Element {

  return (
    <>
      <audio controls src={currentTrack?.href} autoPlay onEnded={() => playNext()} />
      <div style={{ color: '#FFF' }}>{currentTrack?.name}</div>
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  playNext: () => dispatch(actions.playNextTrack()),
});

export default connect(null, mapDispatchToProps)(Player);
