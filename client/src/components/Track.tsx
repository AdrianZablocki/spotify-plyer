import React, { MouseEventHandler, useCallback } from 'react';
import styled from '@emotion/styled';

import ITrack from 'src/interfaces/ITrack';

const TrackItemWrapper = styled.div`
  padding: 10px 20px;
  background: #FFF;
`;
const TrackItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  border-bottom: dotted 1px #9A9A9A;
`;
const TrackIndex = styled.span`
  display: inline-block;
  width: 40px;
  font-size: 12px;
  color: #9A9A9A;
  float:left
`;
const TrackName = styled.span`
  color: #1F1F1F;
  float:left
`;
const TrackDetails = styled.div`
  position: relative;
  display: flex;
  padding: 0 5px;
  align-items: flex-end;
  bottom: -6px;
  background: #fff;
`;

const dot = '.';

interface Properties {
  item: ITrack;
  click: MouseEventHandler;
}

function Track({ item, click }: Properties): JSX.Element {
  const convertDuration = useCallback((millis): string => {
    const minutes: number = Math.floor(millis / 60000);
    const seconds: string = ((millis % 60000) / 1000).toFixed(0).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }, []);

  return (
    <TrackItemWrapper onClick={click}>
      <TrackItem>
        <TrackDetails>
          <TrackIndex>{item.number}{dot}</TrackIndex>
          <TrackName>{item.name}</TrackName>
        </TrackDetails>
        <TrackDetails>{convertDuration(item.duration)}</TrackDetails>
      </TrackItem>
    </TrackItemWrapper>
  );
}

export default Track;
