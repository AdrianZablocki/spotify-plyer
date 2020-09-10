import styled from '@emotion/styled';
import React, { useCallback, useRef, useState } from 'react';
import { connect } from 'react-redux';
import Progressbar from 'src/components/ProgressBar';

import ITrack from 'src/interfaces/ITrack';
import * as actions from 'src/store/actions';
import PlayInactiveImage from 'src/assets/Play_inactive.png';
import PlayActiveImage from 'src/assets/Play_active.png';
import NextButtonImage from 'src/assets/next_ico.svg';
import PrevButtonImage from 'src/assets/previous_ico.svg';
import ShuffleButtonImage from 'src/assets/shuffle_ico.svg';
import RepeatButtonImage from 'src/assets/repeat_ico.svg';

const PlayerWrapper = styled.div`
  position: relative;
`;
const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const NextButton = styled.span`
  display: inline-block;
  width: 20px;
  height: 17px;
  background: url(${NextButtonImage}) no-repeat center center;
  background-size: cover;
`;
const PrevButton = styled.span`
  display: inline-block;
  width: 20px;
  height: 17px;
  background: url(${PrevButtonImage}) no-repeat center center;
  background-size: cover;
`;
const ShuffleButton = styled.span`
  display: inline-block;
  width: 20px;
  height: 17px;
  margin: 0 10px;
  background: url(${ShuffleButtonImage}) no-repeat center center;
  background-size: cover;
`;
const RepeatButton = styled.span`
  display: inline-block;
  width: 20px;
  height: 17px;
  margin: 0 10px;
  background: url(${RepeatButtonImage}) no-repeat center center;
  background-size: cover;
`;
const Details = styled.div`
  height: 50px;
  text-align: center;
`;
const Title = styled.div`
  font-size: 18px;
  color: #0FD55A;
`;
const Artist = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #626262;
  text-transform: uppercase;
`;
const WebAudio = styled.audio`
  position: absolute;
  opacity: 0;
  visibility: hidden;
`;

interface Properties {
  currentTrack: ITrack;
  playNext: Function;
  playPrev: Function;
}

function Player({ currentTrack, playNext, playPrev }: Properties): JSX.Element {
  const audioElement = useRef(null);
  const [playIcon, setPlayIcon] = useState(PlayActiveImage);

  const PlayButton = styled.span`
    display: inline-block;
    width: 100px;
    height: 100px;
    background: url(${playIcon}) no-repeat center center;
    background-size: cover;
  `;

  const playHandler = useCallback(() => {
    audioElement.current.play();
  }, []);

  const pauseHandler = useCallback(() => {
    audioElement.current.pause();
  }, []);

  const playNextHandler = useCallback(() => {
    playNext();
    playHandler();
  }, []);

  const playPrevHandler = useCallback(() => {
    playPrev();
    playHandler();
  }, []);

  const toggle = useCallback(() => {
    if (audioElement.current?.paused) {
      playHandler();
      setPlayIcon(PlayActiveImage);
    } else {
      pauseHandler();
      setPlayIcon(PlayInactiveImage);
    }
  }, []);

  return (
    <PlayerWrapper>
      <Details>
        <Title>{currentTrack?.name}</Title>
        <Artist>{currentTrack?.artist}</Artist>
      </Details>
      <Controls>
        <ShuffleButton />
        <PrevButton onClick={() => playPrevHandler()} />
        <PlayButton onClick={() => toggle()} />
        <NextButton onClick={() => playNextHandler()} />
        <RepeatButton />
      </Controls>
      <Progressbar />
      {/* <div>audio visualization</div> */}
      <WebAudio
        ref={audioElement}
        controls
        src={currentTrack?.href}
        autoPlay
        onEnded={() => playNext()}
      />
    </PlayerWrapper>
  );
}

const mapStateToProps = (state: any) => ({
  currentTrack: state.player.currentTrack,
})
const mapDispatchToProps = (dispatch: any) => ({
  playNext: () => dispatch(actions.playNextTrack()),
  playPrev: () => dispatch(actions.playPrevTrack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
