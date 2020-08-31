import updateObject from 'src/store/utility';
import * as actionTypes from 'src/store/actions/actionTypes';
import Track from 'src/interfaces/track';

interface PlayerState {
  tracks: Track[];
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
})

const reducer = (state: PlayerState = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCHING_TRACKS_START: return fetchTracksStart(state);
    case actionTypes.FETCHING_TRACKS_SUCCESS: return fetchTracksSuccess(state, action);
    case actionTypes.FETCHING_TRACKS_FAIL: return fetchTracksFail(state, action);
    default: return state;
  }
};

export default reducer;
