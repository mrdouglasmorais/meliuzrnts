import React from 'react';
import * as redux from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

import BottomNavigation from '..';

describe('bottom navigation test', () => {
  it('rendering home screen', async () => {
    const {getByTestId} = render(<BottomNavigation />);
    const homeButton = getByTestId('home-button');
    await fireEvent.press(homeButton);
    expect(getByTestId('image-home')).toBeTruthy();
  });

  it('rendering list screen', async () => {
    const dispatchSpyComponent = jest.spyOn(redux, 'useDispatch');
    const dispatchFn = jest.fn();
    dispatchSpyComponent.mockReturnValue(dispatchFn);

    const {getByTestId} = render(<BottomNavigation />);
    const listButton = getByTestId('list-button');
    await fireEvent.press(listButton);
    expect(getByTestId('map-component')).toBeTruthy();
  });

  it('rendering home details', async () => {});

  it('rendering home contact', async () => {});
});
