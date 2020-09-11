import React from 'react';

import durationConverter from 'src/utility/duration-converter';

interface Properties {
  duration: number;
  timer: number;
}

function Progressbar({ duration, timer }: Properties): JSX.Element {
  const seconds = `${timer}`;

  return (
    <div>0:{seconds.padStart(2, '0')} progressbar {durationConverter(duration)}</div>
  );
}
export default Progressbar;
