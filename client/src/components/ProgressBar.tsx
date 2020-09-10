import React from 'react';
import { connect } from 'react-redux';

import ITrack from 'src/interfaces/ITrack';
import durationConverter from 'src/utility/duration-converter';

interface Properties {
  currentTrack: ITrack;
}

function Progressbar({ currentTrack }: Properties): JSX.Element {
  return (
    <div>progressbar{durationConverter(currentTrack?.duration)}</div>
  );
}

const mapStateToProps = (state: any) => ({
  currentTrack: state.player.currentTrack,
})

export default connect(mapStateToProps, null)(Progressbar);
