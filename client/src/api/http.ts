// eslint-disable-next-line no-unused-vars
import axios, { AxiosInstance } from 'axios';

import { API_BASE_URL } from 'src/config';

// eslint-disable-next-line camelcase
function createHttp(access_token : string): AxiosInstance {
  return axios.create({
    headers: {
      // eslint-disable-next-line camelcase
      Authorization: `Bearer ${access_token}`,
    },
    baseURL: API_BASE_URL,
  });
}

export default createHttp;
