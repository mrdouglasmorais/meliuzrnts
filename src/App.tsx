import React from 'react';
import {Provider} from 'react-redux';
import store from './Store';
import BottomNavigation from './Components/BottomNavigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BottomNavigation />
    </Provider>
  );
};

export default App;
