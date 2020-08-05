/**
 * @jest-environment jsdom
 */

import React from 'react';
import { cleanup, configure, render } from '@testing-library/react';

import PlayListsContainer from './PlayListsContainer';

configure({ testIdAttribute: 'data-test' });
afterEach(cleanup);

describe('Play Lists Container', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <PlayListsContainer />,
    );

    const element = getByTestId('section-playlists');

    expect(element).toBeTruthy();
  });
});
