/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react';

import getUser from './get-user';

afterEach(cleanup);

test('Get user method should receive user data', async () => {
  const userMock = {
    display_name: 'User',
    email: 'userMockemail@user.com',
    product: 'premium',
  };
  const http = {
    get: jest.fn().mockResolvedValue({
      data: userMock,
    }),
  };
  const prepareRequest = getUser({ http });
  const response = await prepareRequest();

  expect(response).toEqual(userMock);
});
