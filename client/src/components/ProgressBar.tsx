import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

import durationConverter from 'src/utility/duration-converter';

interface Properties {
  duration: number;
  timer: number;
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

function Progressbar({ duration, timer, audio }: Properties): JSX.Element {
  const seconds = `${durationConverter(timer)}`;
  const progressbarWidth = ((timer / 1000) / (duration / 1000)) * 100;
  const Bar = styled.div`
    position: absolute;
    width: ${progressbarWidth}%;
    height: 5px;
    top: 50%;
    left: 0;
    background: #2A2A2A;
    transform: translateY(-50%);
  `;
  const [test, setTest] = useState(audio.currentTime)

  useEffect(() => {
    const interval = setInterval(() => {
      setTest(audio.currentTime)
    }, 1000);
    return () => clearInterval(interval);
  }, [audio]);

  return (
    <ProgressbarWrapper>
      <Time>{seconds}</Time>
      <BarWrapper>
        <Bar />
      </BarWrapper>
      <Time>{durationConverter(timer)}</Time>
      {/*<div>{test.toFixed(0)}</div>*/}
    </ProgressbarWrapper>
  );
}
export default Progressbar;
