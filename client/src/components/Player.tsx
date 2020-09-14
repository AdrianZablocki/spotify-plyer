import styled from '@emotion/styled';
import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import AudioAnalyser from 'src/components/AudioAnalyer';
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
  padding: 0 20px 70px;
`;
const Controls = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-right: 10px;
  background: url(${ShuffleButtonImage}) no-repeat center center;
  background-size: cover;
`;
const RepeatButton = styled.span`
  display: inline-block;
  width: 20px;
  height: 17px;
  margin-left: 10px;
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

interface Properties {
  currentTrack: ITrack;
  playNext: Function;
  playPrev: Function;
}

function Player({ currentTrack, playNext, playPrev }: Properties): JSX.Element {
  const [seconds, setSeconds] = useState(0);
  const [playIcon, setPlayIcon] = useState(PlayActiveImage);

  const PlayButton = styled.span`
    display: inline-block;
    width: 110px;
    height: 100px;
    background: url(${playIcon}) no-repeat center center;
    background-size: cover;
  `;

  const [audio, setAudio] = useState(new Audio(currentTrack?.href));
  audio.crossOrigin = 'anonymous';
  const playPromise: Promise<any> = audio.play();
  audio.addEventListener('ended', (e) => {
    playNext();
  });

  const playNextHandler = useCallback(() => {
    playNext();
    setPlayIcon(PlayActiveImage);
  }, []);

  const playPrevHandler = useCallback(() => {
    playPrev();
    setPlayIcon(PlayActiveImage);
  }, []);

  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    setPlaying(!playing);
    // eslint-disable-next-line no-unused-expressions
    playing ? setPlayIcon(PlayInactiveImage) : setPlayIcon(PlayActiveImage);
  }

  useEffect(() => {
    console.log('playing', playing)
    // eslint-disable-next-line no-unused-expressions
    playing ? audio.play() : audio.pause();
  }, [playing]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!playing) {
  //       return;
  //     }
  //     // eslint-disable-next-line no-shadow
  //     setSeconds((seconds) => seconds + 1000);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [playing])

  useEffect(() => {
    playPromise.then(() => audio.pause())
    setAudio(new Audio(currentTrack?.href));
    setPlaying(true);
    setPlayIcon(PlayActiveImage);
    setSeconds(0);

    // const interval = setInterval(() => {
    //   if (audioElement.current?.paused) {
    //     return;
    //   }
    //   // eslint-disable-next-line no-shadow
    //   setSeconds((seconds) => seconds + 1000);
    // }, 1000);
    // return () => clearInterval(interval);
  }, [currentTrack]);

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
      <Progressbar duration={currentTrack?.duration} timer={seconds} />
      <AudioAnalyser />
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
