import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Screens/Home';
import List from './Screens/List';
import Contact from './Screens/Contact';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Listagem" component={List} />
        <Stack.Screen name="Contato" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
