import React from 'react';
import {
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native';

const AsyncStoreConstant = 'userAuthFlag';


export class AppScreen2 extends React.Component {
    render() {
      return (
        <SafeAreaView style={styles.safeAreaStyle}>
          <Text>I am App Screen Two</Text>
          <Button
            title="Logout"
            onPress={() => {
              AsyncStorage.setItem(AsyncStoreConstant, '');
              this.props.navigation.navigate(ScreenConstants.AUTH_STACK);
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
    APP_FIRST_SCREEN: 'AppScreen1',
    APP_SECOND_SCREEN: 'AppScreen2',
    AUTH_LOGIN_SCREEN: 'login',
    AUTH_FORGET_SCREEN: 'forgetPassword',
    LOADING_SCREEN: 'AppLoading',
    APP_STACK: 'AppStack',
    AUTH_STACK: 'AuthStack',
  };