import updateObject from 'src/store/utility';
import * as actionTypes from 'src/store/actions/actionTypes';
import ITrack from 'src/interfaces/ITrack';

interface PlayerState {
  tracks: ITrack[];
  isLoading: boolean;
  error: any;
  currentTrack: any;
  nextTrack: any;
}
const initialState: PlayerState = {
  tracks: [],
  isLoading: false,
  error: false,
  currentTrack: null,
  nextTrack: null,
};

const fetchTracksStart = (state: PlayerState) => updateObject(state, { loading: true });

const fetchTracksSuccess = (state: PlayerState, action: any) => updateObject(state, {
  loading: false,
  tracks: action.tracks,
});

const fetchTracksFail = (state: PlayerState, action: any) => updateObject(state, {
  loading: false,
  error: action.error,
});

const chooseTrack = (state: PlayerState, action: any) => {
  const next = state.tracks[action.currentTrackIndex + 1];
  return updateObject(state, {
    currentTrack: action.currentTrack,
    nextTrack: next || state.tracks[0],
  })
}

const playNextTrack = (state: PlayerState) => {
  const index = state.tracks.indexOf(state.nextTrack);
  const current = index > 0 ? state.nextTrack : state.tracks[0];
  const next = index > 0 ? state.tracks[index + 1] : state.tracks[1];
  return updateObject(state, {
    currentTrack: current,
    nextTrack: next || state.tracks[0],
  });
}

const reducer = (state: PlayerState = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCHING_TRACKS_START: return fetchTracksStart(state);
    case actionTypes.FETCHING_TRACKS_SUCCESS: return fetchTracksSuccess(state, action);
    case actionTypes.FETCHING_TRACKS_FAIL: return fetchTracksFail(state, action);
    case actionTypes.CHOOSE_TRACK: return chooseTrack(state, action);
    case actionTypes.PLAY_NEXT_TRACK: return playNextTrack(state);
    default: return state;
  }
};

export default reducer;
