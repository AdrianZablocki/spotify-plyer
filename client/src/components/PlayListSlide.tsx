import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { AxiosInstance } from 'axios';
import { connect } from 'react-redux';

import HttpContext from 'src/contexts/HttpContext';
import * as actions from 'src/store/actions';

const SlideWrapper = styled.div`
  min-height: 280px;
`;
const Image = styled.img`
  border-radius: 50%;
  margin: 0 auto;
  display: block;
`;
const PlaylistName = styled.div`
  margin-bottom: 25px;
  font-size: 14px;
  color: #FFF;
  text-align: center;
`;
const AdditionalInfo = styled.div`
  margin-bottom: 5px;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  color: #626262;
  text-align: center;
  text-transform: uppercase;
`;

interface Properties {
  playlist: any;
  fetchTracks: Function;
}

function PlayListSlide({ playlist, fetchTracks }: Properties): JSX.Element {
  const history = useHistory();
  const http = useContext(HttpContext);

  const redirectToPlaylist = useCallback((id: string) => {
    fetchTracks(playlist.id, http)
    history.push(`/lists/${id}`, {
      id,
    });
  }, [history]);

  return (
    <SlideWrapper onClick={() => redirectToPlaylist(playlist.id)}>
      <AdditionalInfo>{playlist.type}</AdditionalInfo>
      <PlaylistName>{playlist.name}</PlaylistName>
      <Image
        alt={playlist.id}
        src={playlist.images[0].url}
        style={{ height: 210, width: 210 }}
      />
    </SlideWrapper>
  );
}
const mapDispatchToProps = (dispatch: any) => ({
  fetchTracks: (id: string, http: AxiosInstance) => dispatch(actions.fetchTracks(id, http)),
});

export default connect(null, mapDispatchToProps)(PlayListSlide);
