import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import { StackNavigator } from 'react-navigation';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();






const AppNavigator = createStackNavigator({
       Login: { screen:  login },
    Dashboard: { screen:  dashboard },

});











export default createAppContainer(AppNavigator);
  
