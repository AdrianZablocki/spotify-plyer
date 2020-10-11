import styled from '@emotion/styled';
import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import ITrack from 'src/interfaces/ITrack';

const currentTrackHeight = '75px';

const CurrentTruckWrapper = styled.div`
  max-height: ${currentTrackHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: #000;
`;
const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const TrackName = styled.div`
  font-size: 14px;
  color: #0FD55A;
`;
const ArtistName = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #626262;
  text-transform: uppercase;
`;
const Details = styled.div`
  margin-left: 30px;
`;

const chevronIconStyles = {
  width: '45px',
  height: '45px',
  fill: '#0FD55A',
};

interface Properties {
  toggleList: Function;
  track: ITrack;
}

function CurrentTrack({ toggleList, track }: Properties): JSX.Element {
  return (
    <CurrentTruckWrapper onClick={() => toggleList()}>
      <DetailsWrapper>
        <ChevronLeftIcon style={chevronIconStyles} />
        <Details>
          <TrackName>{track?.name}</TrackName>
          <ArtistName>{track?.artist}</ArtistName>
        </Details>
      </DetailsWrapper>
    </CurrentTruckWrapper>
  );
}

export default CurrentTrack;
