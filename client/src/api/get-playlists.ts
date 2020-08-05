import { AxiosInstance } from 'axios';

export default ({ http }: { http: AxiosInstance }) => (): Promise<any> =>
  http.get('/playlists').then(({ data }) => data);
