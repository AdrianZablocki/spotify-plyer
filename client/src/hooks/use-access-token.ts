import { useCallback } from 'react';

// eslint-disable-next-line camelcase
type Params = { access_token: string; refresh_token: string };

interface UseAccessToken {
    accessToken: string;
    isAuthorized: boolean;
}

function useAccessToken(): UseAccessToken {
  const getParams = useCallback((): Params => {
    const hashParams: Params = { access_token: null, refresh_token: null };
    let e: RegExpExecArray;
    const q: string = window.location.hash.substring(1);
    const r: RegExp = /([^&;=]+)=?([^&;]*)/g;
    // eslint-disable-next-line no-cond-assign
    while (e = r.exec(q)) {
      // @ts-ignore
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }, []);

  const params: Params = getParams();

  return {
    accessToken: params.access_token,
    isAuthorized: Boolean(params.access_token && params.refresh_token),
  };
}

export default useAccessToken;
