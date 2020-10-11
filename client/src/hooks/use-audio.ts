import { useEffect, useState } from 'react';

import ITrack from 'src/interfaces/ITrack';

interface UseAudio {
  audio: HTMLAudioElement;
  audioToggle: () => void;
  isAudioPlaying: boolean;
}

interface Properties {
  currentTrack: ITrack;
  playNext?: Function;
}

function UseAudio({ currentTrack, playNext }: Properties): UseAudio {
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(true);
  const [durationTime, setDurationTime] = useState(0);

  audio.crossOrigin = 'anonymous';
  audio.src = currentTrack?.href;

  const playPromise: Promise<any> = audio.play();

  const toggle = () => {
    if (isPlaying) {
      setDurationTime(audio.currentTime);
    }
    setIsPlaying(!isPlaying);
  }

  const play = () => {
    audio.currentTime = durationTime;
    playPromise.then(() => audio.play());
  }

  const pause = () => {
    playPromise.then(() => audio.pause())
  }

  useEffect(() => (isPlaying ? play() : pause()), [isPlaying, durationTime]);

  useEffect(() => {
    audio.addEventListener('ended', () => playNext());
    return () => audio.removeEventListener('ended', () => playNext());
  }, []);

  useEffect(() => {
    setIsPlaying(true);
  }, [currentTrack])

  return {
    audio,
    audioToggle: toggle,
    isAudioPlaying: isPlaying,
  }
}

export default UseAudio;
