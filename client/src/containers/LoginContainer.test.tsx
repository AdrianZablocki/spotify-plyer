/**
 * @jest-environment jsdom
 */

import React from 'react';
import { cleanup, configure, render } from '@testing-library/react';

import LoginContainer from './LoginContainer';

configure({ testIdAttribute: 'data-test' });
afterEach(cleanup);

describe('Login Container', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <LoginContainer />,
    );

    const element = getByTestId('anchor-login');

    expect(element).toBeTruthy();
  });
});
