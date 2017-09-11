import React, { Component } from 'react';
import { View ,Text} from 'react-native';
import {
    StackNavigator,
  } from 'react-navigation';
  
 import InitScreen from './InitScreen';
 import LoginScreen from './LoginScreen';
 import MainScreen from './MainScreen';

 
  //所有页面需要在这里注册，否则不会跳转
  const App = StackNavigator({
    InitScreen: {screen: InitScreen},
    LoginScreen: {screen: LoginScreen},
    MainScreen:{screen:MainScreen},
  });

export default App;