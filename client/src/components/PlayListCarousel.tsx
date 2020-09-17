import styled from '@emotion/styled';
import React from 'react';
import Carousel from 'nuka-carousel';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import PlayListSlide from 'src/components/PlayListSlide';

const CarouselWrapper = styled.div`
  margin-top: 40px;
`;
const iconStyles = {
  width: '45px',
  height: '45px',
  fill: '#626262',
  opacity: '.5',
};

function PlayListCarousel({ playLists }: { playLists: any }): JSX.Element {
  return (
    <CarouselWrapper data-test="section-playListCarousel">
      <Carousel
        cellAlign="center"
        cellSpacing={20}
        renderCenterLeftControls={({ previousSlide }) => (
          <NavigateBeforeIcon onClick={previousSlide} style={iconStyles} />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <NavigateNextIcon onClick={nextSlide} style={iconStyles} />
        )}
        renderBottomCenterControls={() => null}
      >
        {playLists.map((item: any) => <PlayListSlide key={item.id} playlist={item} />)}
      </Carousel>
    </CarouselWrapper>
  );
}

export default PlayListCarousel;
