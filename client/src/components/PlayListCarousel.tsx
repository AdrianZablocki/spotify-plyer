import React from 'react';
import Carousel from 'nuka-carousel';

import PlayListSlide from 'src/components/PlayListSlide';

function PlayListCarousel({ playLists }: { playLists: any }): JSX.Element {
  return (
    <div data-test="section-playListCarousel">
      <Carousel cellAlign="center" cellSpacing={20}>
        {playLists.map((item: any) => <PlayListSlide key={item.id} playlist={item} />)}
      </Carousel>
    </div>
  );
}

export default PlayListCarousel;
