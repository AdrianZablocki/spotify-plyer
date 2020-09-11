import React from 'react';

import durationConverter from 'src/utility/duration-converter';

interface Properties {
  duration: number;
  timer: number;
}

function Progressbar({ duration, timer }: Properties): JSX.Element {
  return (
    <div>{timer} progressbar {durationConverter(duration)}</div>
  );
}
export default Progressbar;
