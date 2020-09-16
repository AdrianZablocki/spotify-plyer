import { useEffect, useState } from 'react';

import ITrack from 'src/interfaces/ITrack';

interface UseAudio {
  audioToggle: () => void;
  audio: HTMLAudioElement;
}

interface Properties {
  currentTrack: ITrack;
  playNext?: Function;
}

function UseAudio({ currentTrack, playNext }: Properties): UseAudio {
  const [audio] = useState(new Audio());
  const [playing, setPlaying] = useState(true);
  const [durationTime, setDurationTime] = useState(0);

  audio.crossOrigin = 'anonymous';
  audio.src = currentTrack?.href;

  const playPromise: Promise<any> = audio.play();

  const toggle = () => {
    if (playing) {
      setDurationTime(audio.currentTime);
    }
    setPlaying(!playing);
  }

  const play = () => {
    audio.currentTime = durationTime;
    playPromise.then(() => audio.play());
  }

  const pause = () => {
    playPromise.then(() => audio.pause())
  }

  useEffect(() => {
    playing ? play() : pause();
  }, [playing, durationTime]);

  useEffect(() => {
    audio.addEventListener('ended', () => {
      // setPlaying(false);
      playNext();
    });
    return () => {
      audio.removeEventListener('ended', () => {
        // setPlaying(false);
        playNext();
      });
    };
  }, []);

  return {
    audioToggle: toggle,
    audio,
  }
}

export default UseAudio;
