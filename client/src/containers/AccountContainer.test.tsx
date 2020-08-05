/**
 * @jest-environment jsdom
 */

import React from 'react';
import { cleanup, configure, render } from '@testing-library/react';

import AccountContainer from './AccountContainer';

configure({ testIdAttribute: 'data-test' });
afterEach(cleanup);

describe('Account Container', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <AccountContainer />,
    );

    const element = getByTestId('section-account');

    expect(element).toBeTruthy();
  });
});
