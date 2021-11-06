import React from 'react';

import Home from '../../Screens/Home';
import List from '../../Screens/List';
import Contact from '../../Screens/Contact';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Listagem" component={List} />
      <Tabs.Screen name="Contato" component={Contact} />
    </Tabs.Navigator>
  );
};

const BottomNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
};

export default BottomNavigation;
