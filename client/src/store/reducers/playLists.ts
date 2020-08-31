import updateObject from 'src/store/utility';
import * as actionTypes from 'src/store/actions/actionTypes';

interface PlayListsState {
  playLists: any;
  isLoading: boolean;
  error: any;
}
const initialState: PlayListsState = {
  playLists: [],
  isLoading: false,
  error: false,
};

const fetchPlayListsStart = (state: any) => updateObject(state, { loading: true });

const fetchPlayListsSuccess = (state: any, action: any) => updateObject(state, {
  loading: false,
  playLists: action.playLists,
});

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCHING_PLAYLIST_START: return fetchPlayListsStart(state);
    case actionTypes.FETCHING_PLAYLIST_SUCCESS: return fetchPlayListsSuccess(state, action);
    default: return state;
  }
};

export default reducer;
