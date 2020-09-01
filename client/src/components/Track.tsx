import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';

import ITrack from 'src/interfaces/ITrack';
import durationConverter from 'src/utility/duration-converter';

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
  max-width: 180px;
  color: #1F1F1F;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const TrackDetails = styled.div`
  position: relative;
  display: flex;
  padding: 0 5px;
  align-items: flex-end;
  bottom: -5px;
  background: #fff;
`;

const dot = '.';

interface Properties {
  item: ITrack;
  click: MouseEventHandler;
  index: number;
}

function Track({ item, click, index }: Properties): JSX.Element {
  return (
    <TrackItemWrapper onClick={click}>
      <TrackItem>
        <TrackDetails>
          <TrackIndex>{index}{dot}</TrackIndex>
          <TrackName>{item.name}</TrackName>
        </TrackDetails>
        <TrackDetails>{durationConverter(item.duration)}</TrackDetails>
      </TrackItem>
    </TrackItemWrapper>
  );
}

export default Track;
