import React from 'react';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {ApploadingScreen} from './app/views/ApploadingScreen'
import {ForgetPassword} from './app/views/ForgetPassword'
import {AuthScreen} from './app/views/AuthScreen'
import {AppScreen1} from './app/views/AppScreen1'
import {AppScreen2} from './app/views/AppScreen2'
import {ToDoList} from './app/views/ToDoList'

const ScreenConstants = {
  TO_DO_LIST_SCREEN: 'ToDoList',
  APP_FIRST_SCREEN: 'AppScreen1',
  APP_SECOND_SCREEN: 'AppScreen2',
  AUTH_LOGIN_SCREEN: 'login',
  AUTH_FORGET_SCREEN: 'forgetPassword',
  LOADING_SCREEN: 'AppLoading',
  APP_STACK: 'AppStack',
  AUTH_STACK: 'AuthStack',
};


const AppStack = createStackNavigator({
  [ScreenConstants.APP_FIRST_SCREEN]: {
    screen: AppScreen1,
    navigationOptions: () => ({
      headerTitle: 'My First App Screen',
    }),
  },
  [ScreenConstants.TO_DO_LIST_SCREEN]: {
    screen: ToDoList,
    navigationOptions: () => ({
      headerTitle: 'The ToDo List',
    }),
  },
  [ScreenConstants.APP_SECOND_SCREEN]: {
    screen: AppScreen2,
    navigationOptions: () => ({
      headerTitle: 'My Second App Screen',
    }),
  },
});

const AuthStack = createStackNavigator({
  [ScreenConstants.AUTH_LOGIN_SCREEN]: {
    screen: AuthScreen,
    navigationOptions: () => ({
      headerTitle: 'Login Screen',
    }),
  },
  [ScreenConstants.AUTH_FORGET_SCREEN]: {
    screen: ForgetPassword,
    navigationOptions: () => ({
      headerTitle: 'Forget Password',
    }),
  },
});

export default createAppContainer(
  
  createSwitchNavigator({
    [ScreenConstants.LOADING_SCREEN]: ApploadingScreen,
    [ScreenConstants.AUTH_STACK]: AuthStack,
    [ScreenConstants.APP_STACK]: AppStack,
  }),
);
