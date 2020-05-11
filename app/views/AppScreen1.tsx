import React from 'react';
import {
  Text,
  SafeAreaView,
  Button,
  StyleSheet
} from 'react-native';


export class AppScreen1 extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <Text>I am App Screen One</Text>
        <Button
          title="Go to Screen 2"
          onPress={() => {
            this.props.navigation.navigate(ScreenConstants.TO_DO_LIST_SCREEN);
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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