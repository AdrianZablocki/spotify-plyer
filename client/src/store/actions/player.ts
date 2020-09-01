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
      const tracks = response.data.tracks.items.map((track: any) => ({
        duration: track.track.duration_ms,
        name: track.track.name,
        href: track.track.preview_url,
        number: track.track.track_number,
        id: track.track.id,
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
