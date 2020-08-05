/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react';

import getPlaylists from './get-playlists';

afterEach(cleanup);

test('Get playlists method should receive array with playlists', async () => {
  const playlistsMock = [{ name: 'Mock list 1' }, { name: 'Mock list 2' }];
  const http = {
    get: jest.fn().mockResolvedValue({
      data: playlistsMock,
    }),
  };
  const prepareRequest = getPlaylists({ http });
  const response = await prepareRequest();

  expect(response).toEqual(playlistsMock);
});
