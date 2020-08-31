import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

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

function PlayListSlide({ playlist }: { playlist: any }): JSX.Element {
  const history = useHistory();

  const redirectToPlaylist = useCallback((id: string) => {
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

export default PlayListSlide;
