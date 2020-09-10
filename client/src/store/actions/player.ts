import { AxiosInstance, AxiosResponse } from 'axios';
import ITrack from 'src/interfaces/ITrack';
import * as actionTypes from 'src/store/actions/actionTypes';

export const fetchTracksStart = () => ({
  type: actionTypes.FETCHING_TRACKS_START,
});

export const fetchTracksSuccess = (data: any) => ({
  type: actionTypes.FETCHING_TRACKS_SUCCESS,
  tracks: data,
});

export const fetchTracksFail = (error: any) => ({
  type: actionTypes.FETCHING_TRACKS_FAIL,
  error,
});

export const fetchTracks = (id: string, http: AxiosInstance) => (dispatch: any) => {
  dispatch(fetchTracksStart());
  http.get(`/playlists/${id}`)
    .then((response: AxiosResponse<any>) => {
      const tracks = response.data.tracks.items.map((item: any) => ({
        duration: item.track.duration_ms,
        name: item.track.name,
        href: item.track.preview_url,
        number: item.track.track_number,
        id: item.track.id,
        artist: item.track.album.artists[0].name,
      }))
      dispatch(fetchTracksSuccess(tracks));
    })
    .catch((error: any) => {
      dispatch(fetchTracksFail(error))
    });
};

export const chooseTrack = (track: ITrack, index: number) => ({
  type: actionTypes.CHOOSE_TRACK,
  currentTrack: track,
  currentTrackIndex: index,
});

export const playNextTrack = () => ({
  type: actionTypes.PLAY_NEXT_TRACK,
});

export const playPrevTrack = () => ({
  type: actionTypes.PLAY_PREV_TRACK,
});
