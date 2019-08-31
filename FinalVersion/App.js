////////////////////////////////////////////////////////////////////////////////
// Created By: Chris Cota, Last Modified: 12/20/2018
////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';
import { Constants } from 'expo';
import Hiscores from './SearchUser';
import SkillDetailScreen from './SkillDetailScreen';
import SkillAllListScreen from './SkillAllListScreen';
import CombatCalculatorScreen from './CombatCalculatorScreen';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
// This is the main means of navigation for the project
const MainNavigator = createStackNavigator(
  {
    SkillAllListScreen: SkillAllListScreen,
    SkillDetailScreen: SkillDetailScreen,
    CombatCalculatorScreen: CombatCalculatorScreen,
  },
  {
    //This is the initial screen
    initialRouteName: 'SkillAllListScreen',
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: 'lightskyblue',
      },
    },
  }
);
const App = createAppContainer(MainNavigator);
export default App;
