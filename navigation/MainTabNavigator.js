import React from 'react';
import { Platform, Button, StyleSheet, View, Image, Text} from 'react-native';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Login from '../screens/Login';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Dashboard from '../screens/Dashboard';

const Dashboards = createStackNavigator({
  Dashboard: Dashboard,
 
});

Dashboards.navigationOptions = {
  tabBarLabel: 'Dash',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createDrawerNavigator({
  Dashboards  
});

