import { AxiosInstance } from 'axios';

export default ({ http, id }: { http: AxiosInstance; id: string }) => (): Promise<any> =>
  http.get(`/playlists/${id}`).then(({ data }) => data);
