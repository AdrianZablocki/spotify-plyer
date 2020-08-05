import { useContext } from 'react';
import { useRequest } from '@umijs/hooks';

import HttpContext from 'src/contexts/HttpContext';
import getPlaylists from 'src/api/get-playlists';

interface UseUser {
  isLoading: boolean;
  hasError: boolean;
  sendRequest: () => Promise<any>;
  response: any;
}

function usePlayLists(): UseUser {
  const http = useContext(HttpContext);

  const { loading, data, error, run } = useRequest(getPlaylists({ http }), {
    manual: true,
  });

  return {
    isLoading: loading,
    hasError: Boolean(error),
    sendRequest: run,
    response: data,
  };
}

export default usePlayLists;
