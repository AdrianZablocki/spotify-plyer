import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

import durationConverter from 'src/utility/duration-converter';

interface Properties {
  duration: number;
  audio: HTMLAudioElement;
}

const ProgressbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;
const Time = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #626262;
  text-transform: uppercase;
`;
const BarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  margin: 0 10px;
  background: #000;
  &:after {
    content: '';
    width: 5px;
    height: 5px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

function Progressbar({ duration, audio }: Properties): JSX.Element {
  const [currentTime, setCurrentTime] = useState<number>(Math.round(audio.currentTime))
  const progressbarWidth = ((currentTime) / (duration / 1000)) * 100;
  const Bar = styled.div`
    position: absolute;
    width: ${progressbarWidth}%;
    height: 5px;
    top: 50%;
    left: 0;
    background: #2A2A2A;
    transform: translateY(-50%);
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      if (audio.paused) {
        return;
      }
      setCurrentTime(Math.round(audio.currentTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [audio]);

  return (
    <ProgressbarWrapper>
      <Time>{durationConverter(currentTime * 1000)}</Time>
      <BarWrapper>
        <Bar />
      </BarWrapper>
      <Time>{durationConverter(duration)}</Time>
    </ProgressbarWrapper>
  );
}
export default Progressbar;
