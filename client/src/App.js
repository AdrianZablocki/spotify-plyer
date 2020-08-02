import React, { Fragment, useCallback, useEffect, useState } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js';
import createHttp from './api/http'

const spotifyWebApi = new Spotify();

function App() {
    const [playList, setPlayList] = useState();

    const getParams = useCallback(() => {
        const hashParams = {};
        let e;
        const q = window.location.hash.substring(1);
        const r = /([^&;=]+)=?([^&;]*)/g;
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }, []);

    const params = getParams();
    const isLoged = Boolean(params.access_token);
    const http = createHttp(params.access_token);

    if (isLoged) {
        spotifyWebApi.setAccessToken(params.access_token);
        console.log(params.access_token)
    }
    // useEffect(() => {
    //     const http = createHttp(params.access_token);
    //     http.get("https://api.spotify.com/v1/me")
    //         .then(res => {
    //             console.log(res);
    //             // setPlayList(res.data.items);
    //         })
    //     // return () => {
    //     //     cleanup
    //     // };
    // }, []);

    const getPlayList = useCallback(() => {
        spotifyWebApi.getUserPlaylists()
            // .then(res => console.log('listy', res.items))
            .then((res) => {
                res.items.map(({ href }) => console.log(href))
                // const http = createHttp(params.access_token);
                // http.get("https://api.spotify.com/v1/playlists/0Xr0myY3cUrgmRqfOVFoqx/tracks")
                //     .then(res => {
                //         console.log(res.data.items);
                //         setPlayList(res.data.items);
                //     })
            })
            .catch(err => console.log(err));
    }, [isLoged]);


    useEffect(() => {
        getPlayList()
        // return () => {
        //     cleanup
        // };
    }, []);

    return (
        <div className="App">
            <a href="http://localhost:8888"><button>Login with spotify</button></a>

            {playList && playList.map(item => (
                <Fragment key={item.track.uri}>
                    {/* <div>{item.track.uri}</div> */}

                    <audio controls>
                        <source src={item.track.preview_url} />
                    </audio>
                </Fragment>
            ))
            }
        </div>
    );
}

export default App;
