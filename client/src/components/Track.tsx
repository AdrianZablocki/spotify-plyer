import styled from '@emotion/styled';
import React, { useCallback } from 'react';

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

function Track({ item, index }: { item: any, index?: number }): JSX.Element {
  const convertDuration = useCallback((millis): string => {
    const minutes: number = Math.floor(millis / 60000);
    const seconds: string = ((millis % 60000) / 1000).toFixed(0).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }, []);

  return (
    <TrackItemWrapper>
      <TrackItem>
        <TrackDetails>
          <TrackIndex>
            {index + 1}
            .
          </TrackIndex>
          <TrackName>
            {item.track.name}
          </TrackName>
        </TrackDetails>
        <TrackDetails>{convertDuration(item.track.duration_ms)}</TrackDetails>
      </TrackItem>
    </TrackItemWrapper>
  );
}

export default Track;
