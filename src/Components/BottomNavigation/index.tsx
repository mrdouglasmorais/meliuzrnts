import React from 'react';

import Home from '../../Screens/Home';
import List from '../../Screens/List';
import Contact from '../../Screens/Contact';
import Details from '../../Screens/Details';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#ff0055ea',
        tabBarInactiveTintColor: '#212121ea',
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={Home}
      />
      <Tabs.Screen
        name="Listagem"
        options={{
          tabBarLabel: 'Listagem',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="clipboard-list-outline"
              color={color}
              size={size}
            />
          ),
        }}
        component={List}
      />
      <Tabs.Screen
        name="Detalhes"
        options={{
          tabBarLabel: 'Detalhes',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={color}
              size={size}
            />
          ),
        }}
        component={Details}
      />
      <Tabs.Screen
        name="Contato"
        options={{
          tabBarLabel: 'Contato',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="card-account-mail-outline"
              color={color}
              size={size}
            />
          ),
        }}
        component={Contact}
      />
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
