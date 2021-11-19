import React from 'react';
import {render} from '@testing-library/react-native';

import BottomNavigation from '..';

describe('bottom navigation test', () => {
  it('redering elements', () => {
    const {debug} = render(<BottomNavigation />);
    debug();
  });
});
