import React from 'react';
import { Camera, AudioListener } from 'three';

// const camera = new Camera();

interface Properties {
  test?: number;
}

function AudioAnalyser({ test }: Properties): JSX.Element {
  const camera = new Camera();
  const listener = new AudioListener();
  camera.add(listener);

  console.log('analyser', camera);
  return (
    <div>analyzer</div>
  );
}
export default AudioAnalyser;
