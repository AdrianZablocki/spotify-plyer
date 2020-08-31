import React, {useCallback, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import {AxiosInstance} from 'axios';
import * as actions from 'src/store/actions';
import {connect} from 'react-redux';
import HttpContext from 'src/contexts/HttpContext';

const Slide = styled.div`
  margin-bottom: 50px;
`;

const Image = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
`;

function PlayListSlide({ playlist, fetchTracks }: { playlist: any, fetchTracks: Function }): JSX.Element {
  const history = useHistory();
  const http = useContext(HttpContext);

  const redirectToPlaylist = useCallback((id: string) => {
    fetchTracks(playlist.id, http)
    history.push(`/lists/${id}`, {
      id,
    });
  }, [history]);

  return (
    <>
      <Image
        alt={playlist.id}
        src={playlist.images[0].url}
        onClick={() => redirectToPlaylist(playlist.id)}
        style={{ height: 200, width: 200, borderRadius: '50%', margin: '0 auto', display: 'block' }}
      />
      <h2>{playlist.name}</h2>
      <h3>{playlist.owner.display_name}</h3>
    </>
  );
}
const mapDispatchToProps = (dispatch: any) => ({
  fetchTracks: (id: string, http: AxiosInstance) => dispatch(actions.fetchTracks(id, http)),
});

export default connect(null, mapDispatchToProps)(PlayListSlide);
