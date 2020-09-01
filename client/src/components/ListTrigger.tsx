import styled from '@emotion/styled';
import React from 'react';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import ITrack from 'src/interfaces/ITrack';
import durationConverter from 'src/utility/duration-converter';

const listTriggerHeight = '59px';

const TriggerWrapper = styled.div`
  display: flex;
  align-items: center;
  max-height: ${listTriggerHeight};
  padding: 15px 35px 15px 25px;
  background: #FFF;
`;
const NextTrack = styled.div`
  width: 100%;
  margin-left: 20px;
`;
const Label = styled.div`
  color: #626262;
  font-size: 10px;
  text-transform: uppercase;
  background: #FFF;
`;
const TrackName = styled.div`
  max-width: 150px;
  position: relative;
  padding-right: 5px;
  bottom: -4px;
  font-size: 14px;
  line-height: 18px;
  background: #FFF;   
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`;
const TrackInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  line-height: 1;
  border-bottom: dotted 1px #9A9A9A;
`;
const Duration = styled.div`
  position: relative;
  padding-left: 5px;
  bottom: -4px;
  color: #626262;
  background: #FFF; 
`;
const iconListStyle = {
  width: '29px',
  height: '29px',
  fill: '#0FD55A',
};

interface Properties {
  nextTrack: ITrack;
  toggleList: Function;
}

const next = 'Next';
const choose = 'Please chose track';

function ListTrigger({ nextTrack, toggleList }: Properties): JSX.Element {
  return (
    <TriggerWrapper onClick={() => toggleList()}>
      <FormatListBulletedIcon style={iconListStyle} />
      <NextTrack>
        {nextTrack ? (
          <>
            <Label>{next}</Label>
            <TrackInfo>
              <TrackName>{nextTrack.name}</TrackName>
              <Duration>{durationConverter(nextTrack.duration)}</Duration>
            </TrackInfo>
          </>
        ) : (
          <div>{choose}</div>
        )}
      </NextTrack>
    </TriggerWrapper>
  );
}

export default ListTrigger;
