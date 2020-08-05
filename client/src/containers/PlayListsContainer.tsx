import React, { useContext, useEffect } from 'react';

import HttpContext from 'src/contexts/HttpContext';

function PlayListsContainer(): JSX.Element {
  const http = useContext(HttpContext);

  useEffect(() => {
    http.get('/playlists').then((res) => console.log(res));
  }, []);
  return (
    <div>play lists</div>
  );
}

export default PlayListsContainer;
