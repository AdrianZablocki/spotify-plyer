import { AxiosInstance } from 'axios';

export default ({ http }: { http: AxiosInstance }) => (): Promise<any> =>
  http.get('/me').then(({ data }) => data);
