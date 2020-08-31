import { AxiosInstance } from 'axios';
import { useContext } from 'react';
import HttpContext from 'src/contexts/HttpContext';
import usePlayList from 'src/hooks/use-playlist';
import * as actionTypes from 'src/store/actions/actionTypes';

export const fetchPlaylistsStart = () => ({
  type: actionTypes.FETCHING_PLAYLIST_START,
});

export const fetchPlaylistsSuccess = (data: any) => ({
  type: actionTypes.FETCHING_PLAYLIST_SUCCESS,
  playLists: data,
});

export const fetchPlaylistsFail = (error: any) => ({
  type: actionTypes.FETCHING_PLAYLIST_FAIL,
  playLists: error,
});

export const fetchPlayLists = (id: string, http: AxiosInstance) => (dispatch: any) => {
  dispatch(fetchPlaylistsStart());
  http.get('/me/playlists').then(({ data }) => {
    dispatch(fetchPlaylistsSuccess(data));
  });
  // const {
  //   isPlaylistLoading,
  //   hasErrorPlaylist,
  //   playlistRequest,
  //   playlistResponse,
  // } = usePlayList({ id });
  // playlistRequest();
  // dispatch(fetchPlaylistsSuccess(playlistResponse));
  // dispatch(fetchPlaylistsFail(hasErrorPlaylist));
};
