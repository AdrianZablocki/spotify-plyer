import React, {useCallback, useState} from 'react';
import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();

// eslint-disable-next-line camelcase
type Params = { access_token: string; refresh_token: string };
function App():JSX.Element {
  const [list, setList] = useState(null);

  const getParams = useCallback((): Params => {
    const hashParams: Params = { access_token: null, refresh_token: null };
    let e: RegExpExecArray;
    const q: string = window.location.hash.substring(1);
    const r: RegExp = /([^&;=]+)=?([^&;]*)/g;
    // eslint-disable-next-line no-cond-assign
    while (e = r.exec(q)) {
      // @ts-ignore
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }, []);

  const params: Params = getParams();
  const isLogged = Boolean(params.access_token);

  if (isLogged) {
    spotifyWebApi.setAccessToken(params.access_token);
    spotifyWebApi.getUserPlaylists().then(({ items }) => {
      setList(items);
    });
  }

  return (
    <div className="App">
      {
        isLogged ? (
          <div>
            {list && list.map((item: any) => <div key={item.id}>{item.name}</div>)}
          </div>
        ) : <a href="http://localhost:8888"><button type="button">Login with spotify</button></a>
      }
    </div>
  );
}

export default App;
