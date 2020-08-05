import { useContext } from 'react';
import { useRequest } from '@umijs/hooks';

import HttpContext from 'src/contexts/HttpContext';
import getUser from 'src/api/get-user';

interface UseUser {
  isLoading: boolean;
  hasError: boolean;
  sendRequest: () => Promise<any>;
  response: any;
}

function useUser(): UseUser {
  const http = useContext(HttpContext);

  const { loading, data, error, run } = useRequest(getUser({ http }), {
    manual: true,
  });

  return {
    isLoading: loading,
    hasError: Boolean(error),
    sendRequest: run,
    response: data,
  };
}

export default useUser;
