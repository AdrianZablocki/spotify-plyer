import { useContext } from 'react';
import { useRequest } from '@umijs/hooks';

import HttpContext from 'src/contexts/HttpContext';
import getPlaylist from 'src/api/get-playlist';

interface UsePlaylist {
  isPlaylistLoading: boolean;
  hasErrorPlaylist: boolean;
  playlistRequest: () => Promise<any>;
  playlistResponse: any;
}

function usePlayLists({ id }: { id: string }): UsePlaylist {
  const http = useContext(HttpContext);

  const { loading, data, error, run } = useRequest(getPlaylist({ http, id }), {
    manual: true,
  });

  return {
    isPlaylistLoading: loading,
    hasErrorPlaylist: Boolean(error),
    playlistRequest: run,
    playlistResponse: data,
  };
}

export default usePlayLists;
