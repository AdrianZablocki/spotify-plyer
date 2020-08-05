/**
 * @jest-environment jsdom
 */

import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useRequest } from '@umijs/hooks';

import getPlaylist from '../api/get-playlists';

afterEach(cleanup);

describe('Use playlist', () => {
  it('should return correct data if response is success', async () => {
    const data = [{ name: 'Mock list 1' }, { name: 'Mock list 2' }];
    const http = {
      get: jest.fn().mockResolvedValue({ data }),
    };

    const { result, waitForNextUpdate } = renderHook(() => useRequest(getPlaylist({ http })));

    act(() => {
      result.current.run();
    });

    await waitForNextUpdate();
    expect(result.current.data).toEqual(data);
  });

  it('should return error if response is failed', async () => {
    const error = { errors: ['error code'] };
    const http = {
      get: jest.fn().mockRejectedValue(error),
    };

    const { result, waitForNextUpdate } = renderHook(() => useRequest(getPlaylist({ http })));

    act(() => {
      result.current.run();
    });

    await waitForNextUpdate();
    expect(result.current.error).toEqual(error);
  });
});
