import { AxiosInstance } from 'axios';
import React, { useCallback, useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PlayListCarousel from 'src/components/PlayListCarousel';
import HttpContext from 'src/contexts/HttpContext';
import usePlayLists from 'src/hooks/use-playlists';
import * as actions from 'src/store/actions/index';

function PlayListsContainer({ test, test2}): JSX.Element {
  const history = useHistory();
  const http = useContext(HttpContext);
  const { isLoading, hasError, sendRequest, response } = usePlayLists();

  const redirectToAccount = useCallback(() => {
    history.push('/account');
  }, [history]);

  useEffect(() => {
    sendRequest();
  }, []);

  console.log('http', http);
  return (
    <div data-test="section-playlists">
      {isLoading && <div>spiner</div>}
      {hasError && <div>error message</div>}
      {response && <PlayListCarousel playLists={response.items} />}
      <button type="button" onClick={() => test2('7beu9pGygblSZAlTuFbBhC', http)}>click</button>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  test: state.playLists,
});
const mapDispatchToProps = (dispatch: any) => ({
  test2: (id: string, http: AxiosInstance) => dispatch(actions.fetchPlayLists(id, http)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayListsContainer);
//7beu9pGygblSZAlTuFbBhC
