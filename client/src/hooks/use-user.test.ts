/**
 * @jest-environment jsdom
 */

import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useRequest } from '@umijs/hooks';

import getUser from '../api/get-user';

afterEach(cleanup);

describe('Use user', () => {
  it('should return correct user data if response is success', async () => {
    const data = {
      display_name: 'User',
      email: 'userMockemail@user.com',
      product: 'premium',
    };
    const http = {
      get: jest.fn().mockResolvedValue({ data }),
    };

    const { result, waitForNextUpdate } = renderHook(() => useRequest(getUser({ http })));

    act(() => {
      result.current.run();
    });

    await waitForNextUpdate();
    expect(result.current.data).toEqual(data);
  });

  it('should return user error message if response is failed', async () => {
    const error = { errors: ['error code'] };
    const http = {
      get: jest.fn().mockRejectedValue(error),
    };

    const { result, waitForNextUpdate } = renderHook(() => useRequest(getUser({ http })));

    act(() => {
      result.current.run();
    });

    await waitForNextUpdate();
    expect(result.current.error).toEqual(error);
  });
});
